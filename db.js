import mongoose from "mongoose";
import 'dotenv/config'


const string = process.env.DB_URL;

const connectDB = async () => {
    await mongoose.connect(string);
}

export default connectDB;