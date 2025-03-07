import { createContext, ReactNode } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
];

interface Expense {
  id: string;
  desctiption: string;
  amount: number;
  date: string;
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
    updateExpense: () => {}
}


export const ExpensesContext = createContext<ExpensesContextType>(defaultContext)

export const ExpensesProvider = ({children}: ComponentProps ) => {
    const [expenses, setExpenses] = useState<Expense[]>([])

    const addExpense = (expense: Expense) = {
        setExpenses((prevExpenses) => [...prevExpenses, expense])
    }
    const deleteExpense = (id: string) = {
        setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id))
    }
    const updateExpense = (id: string, updatedExpense: Expense) = {
        setExpenses((prevExpenses) => prevExpenses.map((expense) => expense.id === id ? updatedExpense : expense))
    }

    return <ExpensesContext.ExpensesProvider value={{expenses, addExpense, deleteExpense, updateExpense}}>
        {children}
    </ExpensesContext.ExpensesProvider>
 

}