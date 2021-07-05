import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
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
            {filteredExpenses.map(expense => <ExpenseItem
               key={expense.id}
               title={expense.title}
               date={expense.date}
               amount={expense.amount}
            />)} 
          </Card>
        );


}

export default Expenses;