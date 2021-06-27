import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {id: '1', date: new Date(2021,3,1), title: 'Car Insurance', amount: 350},
    {id: '2', date: new Date(2020,3,1), title: 'New apartment', amount: 150000 },
    {id: '3', date: new Date(2021,3,1), title: 'Rent', amount: 900}
  ]

  return (
    <div>
      <h2>Let's get started with react !</h2>
      <ExpenseItem title={expenses[0].title}
                    date={expenses[0].date}
                    amount={expenses[0].amount}/>
       <ExpenseItem title={expenses[1].title}
                   date={expenses[1].date}
                   amount={expenses[1].amount}/>
       <ExpenseItem title={expenses[2].title}
                   date={expenses[2].date}
                   amount={expenses[2].amount}/>
    </div>
  );
}

export default App;