import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import './form.css'

const Form = () => {
    const { addIncome, getIncome } = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addIncome(inputState)
        getIncome()
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <form onSubmit={handleSubmit} className='form-tag'>
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name={'title'}
                    placeholder="Income Title"
                    onChange={handleInput('title')}
                    className='field-tag'
                />
            </div>
            <div className="input-control">
                <input value={amount}
                    type="text"
                    name={'amount'}
                    placeholder={'Income Amount'}
                    onChange={handleInput('amount')}
                    className='field-tag'
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date })
                    }}
                    className='field-tag'
                />
            </div>
            <div className="selects input-control">
                <select required value={category} className='field-tag' name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="youtube">Youtube</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" className='field-tag' value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <button
                    name='Add Income'
                    className='sub-btn'
                >
                    <i className="fa-solid fa-plus"></i> Add Income
                </button>
            </div>
        </form>
    )
}

export default Form