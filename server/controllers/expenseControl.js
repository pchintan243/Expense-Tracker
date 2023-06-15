const ExpenseSchema = require("../models/expenseModel")

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const expense = ExpenseSchema({
        title, amount, category, description, date
    })

    try {

        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: 'All Fields are required..!!' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a number..!!' })
        }

        await expense.save()
        res.status(201).json({ message: 'expense Added..!!' })

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'Error occured while adding expense..!!' })
    }
    console.log(expense);
}

exports.getExpense = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 })
        res.json(expenses)

    } catch (error) {
        res.status(404).json({ message: 'Error occured while getting data..!!' })
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const expense = await ExpenseSchema.findByIdAndDelete(id)
        res.status(200).json(expense)
        console.log(expense);
    } catch (error) {
        res.status(404).json({ message: 'Error occured while deleting data..!!' })
    }
}