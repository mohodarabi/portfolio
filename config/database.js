const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            `mongodb+srv://MoHoDarabi:Elmondoo1999@cluster0.lmbpl.mongodb.net/Portfolio?retryWrites=true&w=majority`
        );
        console.log(`connected on ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;