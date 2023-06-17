import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import "./dashboard.css"
import Chart from '../chart/Chart';
import History from '../history/History';

const Dashboard = () => {
    const { totalExpense, incomes, expenses, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext()

    useEffect(() => {
        getIncome()
        getExpense()
    }, [])

    return (
        <>
            <div className="dashaboard-container">
                <div className="dashboard-inner">
                    <h1 className='h1-dashboard'>All Transactions</h1>
                    <div className="stats-con">
                        <div className="chart-con">
                            <Chart />
                            <div className="amount-con">
                                <div className="income">
                                    <h2>Total Income</h2>
                                    <p className='dashboard-p'>
                                        <i className="fa-solid fa-dollar-sign"></i> {totalIncome()}
                                    </p>
                                </div>
                                <div className="expense">
                                    <h2>Total Expense</h2>
                                    <p className='dashboard-p'>
                                        <i className="fa-solid fa-dollar-sign"></i> {totalExpense()}
                                    </p>
                                </div>
                                <div className="balance">
                                    <h2>Total Balance</h2>
                                    <p className='dashboard-p balance-p' style={totalBalance() < 0 ? { color: 'red' } : { color: 'green' }}>
                                        <i className="fa-solid fa-dollar-sign"></i> {totalBalance()}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="history-con">
                            <History />
                            <h2 className="salary-title">Min <span className='salary-title-span'>Income</span>Max</h2>
                            <div className="salary-item">
                                <p className='salary-item-p'>
                                    ${Math.min(...incomes.map(item => item.amount))}
                                </p>
                                <p className='salary-item-p'>
                                    ${Math.max(...incomes.map(item => item.amount))}
                                </p>
                            </div>
                            <h2 className="salary-title">Min <span className='salary-title-span'>Expense</span>Max</h2>
                            <div className="salary-item">
                                <p className='salary-item-p'>
                                    ${Math.min(...expenses.map(item => item.amount))}
                                </p>
                                <p className='salary-item-p'>
                                    ${Math.max(...expenses.map(item => item.amount))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard