import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  // function clickHandler
  const [title2, setTitle] = useState(title);
  console.log("ExpenseItem evalueted by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title, title2);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title2}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
