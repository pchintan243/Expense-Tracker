import React from 'react'
import moment from 'moment'
import "./incomeItem.css"

const IncomeItem = (id, title, amount, date, category, description, deleteItem, type) => {

    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return <i className="fa-solid fa-money-bill"></i>;
            case 'freelancing':
                return <i className="fa-solid fa-earth-americas"></i>
            case 'investments':
                return <i className="fa-solid fa-arrow-trend-up"></i>;
            case 'stocks':
                return <i className="fa-solid fa-users-between-lines"></i>;
            case 'bitcoin':
                return <i className="fa-brands fa-bitcoin"></i>;
            case 'bank':
                return <i className="fa-brands fa-cc-visa"></i>;
            case 'youtube':
                return <i className="fa-brands fa-youtube"></i>;
            case 'other':
                return <i className="fa-solid fa-piggy-bank"></i>;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {

        switch (category) {
            case 'education':
                return <i className="fa-solid fa-book-open"></i>;
            case 'groceries':
                return <i className="fa-solid fa-bowl-food"></i>;
            case 'health':
                return <i className="fa-solid fa-briefcase-medical"></i>;
            case 'subscriptions':
                return <i className="fa-solid fa-tv"></i>;
            case 'takeaways':
                return <i className="fa-solid fa-utensils"></i>;
            case 'clothing':
                return <i className="fa-solid fa-shirt"></i>;
            case 'travelling':
                return <i className="fa-solid fa-earth-americas"></i>;
            case 'other':
                return <i className="fa-solid fa-circle-dot"></i>;
            default:
                return ''
        }
    }

    console.log('type', type)

    const dateFormat = (date) =>{
        return moment(date).format('DD/MM/YYYY')
    }
    
    return (
        <div className="incomeitem-container">
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p className='para-tag'><i className="fa-solid fa-dollar-sign"></i> {amount}</p>
                        <p className='para-tag'><i className="fa-solid fa-calendar"></i>{dateFormat(date)}</p>
                        <p className='para-tag'>
                            <i className="fa-solid fa-comment"></i>
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <button
                            // iColor={'#fff'}
                            // hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                            className='btn-incomeitem'
                        >
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeItem