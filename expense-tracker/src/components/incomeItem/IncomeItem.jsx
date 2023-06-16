import React from 'react'
import moment from 'moment'
import "./incomeItem.css"

const IncomeItem = ({ id, title, amount, date, category, description, deleteItem, type }) => {

    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return <i className="fa-solid fa-money-bill income-item-i"></i>;
            case 'freelancing':
                return <i className="fa-solid fa-earth-americas income-item-i"></i>
            case 'investments':
                return <i className="fa-solid fa-arrow-trend-up income-item-i"></i>;
            case 'stocks':
                return <i className="fa-solid fa-users-between-lines income-item-i"></i>;
            case 'bitcoin':
                return <i className="fa-brands fa-bitcoin income-item-i"></i>;
            case 'bank':
                return <i className="fa-brands fa-cc-visa income-item-i"></i>;
            case 'youtube':
                return <i className="fa-brands fa-youtube income-item-i"></i>;
            case 'other':
                return <i className="fa-solid fa-piggy-bank income-item-i"></i>;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {

        switch (category) {
            case 'education':
                return <i className="fa-solid fa-book-open income-item-i"></i>;
            case 'groceries':
                return <i className="fa-solid fa-bowl-food income-item-i"></i>;
            case 'health':
                return <i className="fa-solid fa-briefcase-medical income-item-i"></i>;
            case 'subscriptions':
                return <i className="fa-solid fa-tv income-item-i"></i>;
            case 'takeaways':
                return <i className="fa-solid fa-utensils income-item-i"></i>;
            case 'clothing':
                return <i className="fa-solid fa-shirt income-item-i"></i>;
            case 'travelling':
                return <i className="fa-solid fa-earth-americas income-item-i"></i>;
            case 'other':
                return <i className="fa-solid fa-circle-dot income-item-i"></i>;
            default:
                return ''
        }
    }

    console.log('type', type)

    const dateFormat = (date) => {
        return moment(date).format('DD/MM/YYYY')
    }

    return (
        <div className="incomeitem-container">
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5 className='h5-income-item'>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p className='para-tag'><i className="fa-solid fa-dollar-sign income-item-i"></i> {amount}</p>
                        <p className='para-tag'><i className="fa-solid fa-calendar income-item-i"></i>{dateFormat(date)}</p>
                        <p className='para-tag'>
                            <i className="fa-solid fa-comment income-item-i"></i>
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