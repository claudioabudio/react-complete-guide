import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {

  const expenses = [
    {id: '1', date: new Date(2021,3,1), title: 'Car Insurance', amount: 350},
    {id: '2', date: new Date(2020,3,1), title: 'New apartment', amount: 150000 },
    {id: '3', date: new Date(2021,3,1), title: 'Rent', amount: 900}
  ]

  return (
    <div>
      <h2>Let's get started with react !</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;