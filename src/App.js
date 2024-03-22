import "./App.css";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";
import Income from "./components/Income";
import History from "./components/History";
import { useState } from "react";

const setId = 0;

function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [historyList, setHistoryList] = useState([]);
  return (
    <div className="content">
      <h1>Expense Tracker</h1>
      <Balance balance={balance} />
      <Income income={income} expense={expense} />
      <History historyList={historyList} />
      {/* <div className="historyList">
        {historyList.map((setId) => (
          <li className="historyItems" key={setId++}>
            {historyList}
          </li>
        ))}
      </div> */}
      <Transactions
        setHistoryList={setHistoryList}
        expense={expense}
        income={income}
        expenseChange={setExpense}
        incomeChange={setIncome}
        balance={balance}
        changeBalance={setBalance}
      />
      {/* <button onClick={() => console.log(JSON.stringify(historyList))}>
        click
      </button> */}
    </div>
  );
}

export default App;
