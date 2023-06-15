import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"

const Sidebar = () => {
    return (
        <>
            <nav className="sidebar-container">
                <div className="user-logo">
                    <img src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg" alt="" />
                    <div className="text">
                        <h2 className='name-tag'>Chintan</h2>
                        <p className='money-tag'>Your Money</p>
                    </div>
                </div>
                <ul className='menu-items'>
                    <Link to='/dashboard' className='active'><i className="fa-solid fa-chart-line"></i>Dashboard</Link>
                    <Link to='/transactions' className='active'><i className="fa-solid fa-credit-card"></i>View Transactions</Link>
                    <Link to='/incomes' className='active'><i className="fa-solid fa-money-bill-trend-up"></i>Incomes</Link>
                    <Link to='/expenses' className='active'><i className="fa-solid fa-money-bill-transfer"></i>Expenses</Link>
                </ul>
                <div>
                    <Link to='/signout' className='active'><i className="fa-solid fa-sign-out"></i>Sign Out</Link>
                </div>
            </nav>
        </>
    )
}

export default Sidebar