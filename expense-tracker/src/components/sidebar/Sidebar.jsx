import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"

const Sidebar = () => {
    const [loc, setLoc] = useState(window.location.pathname)
    return (
        <>
            <nav className="sidebar-container">
                <div className="user-logo">
                    <img src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg" alt="" />
                    <div className="text-sidebar">
                        <h2 className='name-tag'>Chintan</h2>
                        <p className='money-tag'>Your Money</p>
                    </div>
                </div>
                <ul className='menu-items'>
                    <Link to='/dashboard' className={loc === '/dashboard' ? 'active' : ''} onClick={() => setLoc("/dashboard")}><i className="fa-solid fa-chart-line side-icon"></i>Dashboard</Link>
                    <Link to='/incomes' className={loc === '/incomes' ? 'active' : ''} onClick={() => setLoc("/incomes")}><i className="fa-solid fa-money-bill-trend-up side-icon"></i>Incomes</Link>
                    <Link to='/expenses' className={loc === '/expenses' ? 'active' : ''} onClick={() => setLoc("/expenses")}><i className="fa-solid fa-money-bill-transfer side-icon"></i>Expenses</Link>
                </ul>
                <div>
                    <Link to='/signout' className={loc === '/signout' ? 'active' : ''} onClick={() => setLoc("/signout")}><i className="fa-solid fa-sign-out side-icon"></i>Sign Out</Link>
                </div>
            </nav>
        </>
    )
}

export default Sidebar