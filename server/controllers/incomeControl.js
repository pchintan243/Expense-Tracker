const IncomeSchema = require("../models/incomeModel")

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const income = IncomeSchema({
        title, amount, category, description, date
    })

    try {

        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: 'All Fields are required..!!' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a number..!!' })
        }

        await income.save()
        res.status(201).json({ message: 'Income Added..!!' })

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'Error occured while adding income..!!' })
    }
    console.log(income);
}

exports.getIncome = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        // res.status(200).json({ message: "Income data got..!!" })
        res.json(incomes)

    } catch (error) {
        res.status(404).json({ message: 'Error occured while getting data..!!' })
    }
}

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;

    try {
        const income = await IncomeSchema.findByIdAndDelete(id)
        res.status(200).json(income)
        console.log(income);
    } catch (error) {
        res.status(404).json({ message: 'Error occured while deleting data..!!' })
    }
}