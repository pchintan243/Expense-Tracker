import React, { useState } from 'react'
import "./home.css"

const Home = () => {
    const [toggleButton, setToggleButton] = useState(false)
    return (
        <>
            <div className="container">
                {/* Header Section */}
                <div className='header-container'>
                    <h1>
                        Expense Tracker
                    </h1>
                </div>

                {/* Balance and Button Section */}
                <div className="main-container">
                    <h3>Balance: $10000</h3>
                    <button className="btn">{toggleButton ? "Cancel" : "ADD"}</button>
                </div>
            </div>
        </>
    )
}

export default Home