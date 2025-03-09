import React, { createContext, useState, ReactNode } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: "2021-12-19",
  },
];

interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

interface ComponentProps {
  children: ReactNode;
}

interface ExpensesContextType {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, updatedExpense: Expense) => void;
}

const defaultContext: ExpensesContextType = {
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
};

export const ExpensesContext =
  createContext<ExpensesContextType>(defaultContext);

export const ExpensesContextProvider = ({ children }: ComponentProps) => {
  const [expenses, setExpenses] = useState<Expense[]>(DUMMY_EXPENSES);

  const addExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const updateExpense = (id: string, updatedExpense: Expense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id ? updatedExpense : expense
      )
    );
  };

  return (
    <ExpensesContext.Provider
      value={{ expenses, addExpense, deleteExpense, updateExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
