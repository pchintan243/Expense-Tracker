const mongoose = require('mongoose');
require('dotenv').config()

const db = process.env.DB

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(db);
    console.log("Database Connected..!!");
}