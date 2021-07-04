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
            <ExpenseItem
              title={props.expenses[0].title}
              date={props.expenses[0].date}
              amount={props.expenses[0].amount}
            />
            <ExpenseItem
              title={props.expenses[1].title}
              date={props.expenses[1].date}
              amount={props.expenses[1].amount}
            />
            <ExpenseItem
              title={props.expenses[2].title}
              date={props.expenses[2].date}
              amount={props.expenses[2].amount}
            />
          </Card>
        );


}

export default Expenses;