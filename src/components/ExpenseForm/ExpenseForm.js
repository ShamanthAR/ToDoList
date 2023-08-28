import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [userInputs, setUserInputs] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	});

	const changeHandler = (identifier, value) => {
		if (identifier === "title") {
			setUserInputs((prevState) => {
				return {
					...prevState,
					enteredTitle: value,
				};
			});
		} else if (identifier === "amount") {
			setUserInputs((prevState) => {
				return {
					...prevState,
					enteredAmount: value,
				};
			});
		} else {
			setUserInputs((prevState) => {
				return {
					...prevState,
					enteredDate: value,
				};
			});
		}
	};

	const submitForm = (event) => {
		event.preventDefault();
		const newExpense = {
			title: userInputs.enteredTitle,
			amount: Number(userInputs.enteredAmount),
			date: new Date(userInputs.enteredDate),
		};
		props.onSaveExpense(newExpense);
		setUserInputs({
			enteredTitle: "",
			enteredDate: "",
			enteredAmount: "",
		});
	};
	
	return (
		<form onSubmit={submitForm}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={(event) => changeHandler("title", event.target.value)}
						value={userInputs.enteredTitle}
					></input>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="1"
						step="1"
						value={userInputs.enteredAmount}
						onChange={(event) => changeHandler("amount", event.target.value)}
					></input>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2023-08-27"
						value={userInputs.enteredDate}
						onChange={(event) => changeHandler("date", event.target.value)}
					></input>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={props.editHandle }>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
