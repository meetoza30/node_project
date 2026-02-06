import express from "express";
import user from "./userModel.js";
import { connect } from "mongoose";
import connectDB from "./db.js";
import 'dotenv/config'


const string = process.env.DB_URL;

const app = express();


app.use(express.json());


app.post('/push', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log('Received data:', username, password);
        const User = new user({ username, password });

        await User.save();
        res.send("sign up success");
    } catch (err) {
        console.log('Error:', err);
        res.status(500).send("Error saving user");
    }
});

app.get('/', async (req, res) => {
    try {
        console.log(string)
        res.json({
            db_key: string,
            msg : "hello world"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({error : err});
    }
});


connectDB()
    .then(() => {
        console.log("db connection established");
        app.listen(3000, () => {
            console.log("server running on 3000")
        })
    })
    .catch((err) => {
        console.log(err);
    })




