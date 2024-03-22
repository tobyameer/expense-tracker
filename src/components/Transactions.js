import React, { useState } from "react";

const setId = 0;

export default function Transactions({
  changeBalance,
  balance,
  incomeChange,
  expenseChange,
  income,
  expense,
  setHistoryList,
}) {
  const [value, setValue] = useState();
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleClick() {
    changeBalance(+value + balance);

    setList([...list, text + value]);
    setHistoryList([list]);
    // setHistoryList([list]);
    console.log(list);
    // setText("");
    // setValue("");

    // if (!text) {
    //   alert("add text.");
    //   return;
    // }
    if (!value) {
      alert("Add amount.");
      return;
    }
    if (value > 0) {
      incomeChange(+value + income);
    }
    if (value < 0) {
      expenseChange(+value + expense);
    }
  }

  return (
    <div className="transaction">
      <h3>Add a new transaction</h3>

      {/* <p>Text</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
      /> */}
      <p>Amount</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter amount..."
      />
      <button onClick={() => handleClick()}>Enter</button>
    </div>
  );
}
