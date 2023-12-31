import React from 'react'
import { useGlobalContext } from '../../context/globalContext';
import "./history.css"

const History = () => {

    const { transactionHistory } = useGlobalContext()

    const [...history] = transactionHistory()
    return (
        <div className="history-container">
            <h2>Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item
                return (
                    <div key={_id} className="history-item">
                        <p className='history-p-tag' style={{
                            color: type === 'expense' ? 'red' : '#42AD00'
                        }}>
                            {title}
                        </p>

                        <p className='history-p-tag' style={{
                            color: type === 'expense' ? 'red' : '#42AD00'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default History