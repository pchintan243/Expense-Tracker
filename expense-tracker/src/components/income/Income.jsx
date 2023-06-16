import React, { useEffect } from 'react'
import "./income.css"
import Form from '../form/Form'
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../incomeItem/IncomeItem';

const Income = () => {
    const { addIncome, incomes, getIncome, deleteIncome, totalIncome } = useGlobalContext()
    useEffect(() => {
        getIncome()
    }, [])

    return (
        <div className="main-income">
            <div className="income-inner">
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span className='span-tag'>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const { _id, title, amount, date, category, description, type } = income;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                // indicatorColor="#42AD00"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Income