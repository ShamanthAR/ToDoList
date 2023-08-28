import "./ExpenseItem.css";
import DateCard from "./DateCard";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
	return (
		<li>
			<Card className="expense-item">
				<DateCard data={props.itemDate} />
				<div className="expense-item__description">
					<h2>{props.itemName}</h2>
					<div className="expense-item__price">${props.itemPrice}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
