import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
	const [isEditing,setIsEditing] = useState(false);
	const onExpenseAdd = (expenseData) => {
		const expenseAdded = {
			...expenseData,
			id: Math.random().toString(),
		};
		props.addedExpense(expenseAdded);
	};

	const editHandler = () => { 
		setIsEditing(true);
	}
	const setEditableFalse = () => { 
		setIsEditing(false);
	}
	return (
		<div className="new-expense">
			{!isEditing && <button onClick={editHandler}>Add Expense</button>}
			{isEditing && <ExpenseForm editHandle={ setEditableFalse} onSaveExpense={onExpenseAdd} />}
		</div>
	);
};

export default NewExpenses;
