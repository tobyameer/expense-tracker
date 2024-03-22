import React from "react";

export default function ({ income, expense }) {
  return (
    <div className="incomeContent">
      <div className="income">
        <h4>Income</h4>
        <p>${income}</p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p>${expense}</p>
      </div>
    </div>
  );
}
