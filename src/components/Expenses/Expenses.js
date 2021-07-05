import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import {useState} from 'react'

function Expenses(props) {
        const [year, setYear] = useState('2020')

        const filteredExpenses = props.expenses.filter(expense => 
          expense.date.getFullYear().toString() === year)

        const filterExpenseHandler = (year) => {
            setYear(year)
          }

        return (        
          <Card className="expenses">
            <ExpensesFilter selected={year} onChangeFilter={filterExpenseHandler}/>
            <ExpensesList items={filteredExpenses}/>
          </Card>
        );


}

export default Expenses;