import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = [
    {id: '1', date: new Date(2021,3,1), title: 'Car Insurance', amount: 350},
    {id: '2', date: new Date(2020,3,1), title: 'New apartment', amount: 150000 },
    {id: '3', date: new Date(2021,3,1), title: 'Rent', amount: 900}
  ]

  const addExpenseHandler = (expense) => {
      console.log("In App.js")
      console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;