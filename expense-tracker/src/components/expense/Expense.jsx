import React, { useEffect } from 'react'
import "../income/income.css"
import Form from '../form/Form'
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../incomeItem/IncomeItem';

const Expense = () => {
    const { expenses, getExpense, deleteExpense, totalExpense } = useGlobalContext()
    useEffect(() => {
        getExpense()
    }, [])

    return (
        <div className="main-income">
            <div className="income-inner">
                <h1>Expenses</h1>
                <h2 className="total-income">Total Expense: <span className='span-tag'>${totalExpense()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {expenses.map((expense) => {
                            const { _id, title, amount, date, category, description, type } = expense;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expense