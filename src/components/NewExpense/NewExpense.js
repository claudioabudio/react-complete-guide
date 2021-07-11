import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {
    const [editingState, setEditingState] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
        setEditingState(false)
    }
   
    const startEditingHandler = () => {
        setEditingState(true)
    }

    const stopEditingHandler = () => {
        setEditingState(false)
    }

    return (
        <div className='new-expense'>
            {!editingState && <button onClick={startEditingHandler} >Add new expense</button>}
            {editingState && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )

}

export default NewExpense;