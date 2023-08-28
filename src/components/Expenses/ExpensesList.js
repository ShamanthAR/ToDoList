import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    console.log(props.items)
	if(props.items.length === 0) {
		return <h2 className="expenses-list__fallback ">Found no expenses</h2>;
	}
	return (
		<ul className="expenses-list">
            {props.items.map((item) => {
                return (
                    <ExpenseItem
					key={item.id}
					itemDate={item.date}
					itemName={item.title}
					itemPrice={item.amount}
				/>
                )
				
			})}
		</ul>
	);
};

export default ExpensesList;
