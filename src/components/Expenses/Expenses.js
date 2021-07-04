import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import {useState} from 'react'

function Expenses(props) {
        const [year, setYear] = useState('2020')

        const filterExpenseHandler = (year) => {
            setYear(year)
            console.log(year)
        }

        return (        
          <Card className="expenses">
            <ExpensesFilter selected={year} onChangeFilter={filterExpenseHandler}/>
            {props.expenses.map(expense => <ExpenseItem
               title={expense.title}
               date={expense.date}
               amount={expense.amount}
            />)} 
          </Card>
        );


}

export default Expenses;