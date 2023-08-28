import React, { useState } from "react";
import NewExpenses from "../ExpenseForm/NewExpenses";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
	const [yearSelected, setYearSelected] = useState("All");
	const expenseAdded = (expense) => {
		props.getAddedExpense(expense);
	};

	const yearReturned = (year) => {
		setYearSelected(year);
	};

	let filteredYear = props.items.filter(item => { 
		return item.date.getFullYear().toString() === yearSelected
	})
	if (yearSelected === "All") {
		filteredYear = props.items;
	 }
	return (
		<div>
			<NewExpenses addedExpense={expenseAdded} />
			<Card className="expenses">
				<ExpenseFilter
					initialSelectedYear={yearSelected}
					selectedYear={yearReturned}
				/>
				<ExpensesChart expensesData={ filteredYear} />
				<ExpensesList items={ filteredYear }/>
			</Card>
		</div>
	);
};

export default Expenses;
