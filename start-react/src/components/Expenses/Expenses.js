import React, { useState } from 'react'
import ExpenseItem from "../Expenses/ExpenseItem";
import '../Expenses/Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No Expenses found.</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <Card className="Expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expensesContent}
            </Card >
        </div>

    )
}

export default Expenses;