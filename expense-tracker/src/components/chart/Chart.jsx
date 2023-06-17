import React from 'react'
import "./chart.css"
import moment from 'moment'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import { useGlobalContext } from '../../context/globalContext'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

const Chart = () => {

    const { incomes, expenses } = useGlobalContext()


    const dateFormat = (date) => {
        return moment(date).format('DD/MM/YYYY')
    }


    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const { amount } = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const { amount } = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }


    return (
        <div className='chart-container'>
            <Line data={data} />
        </div>
    )
}

export default Chart