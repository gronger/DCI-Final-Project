import express from 'express';
import cors from 'cors';
import { User } from './models/user.js';
import { connect } from './libs/database.js';
import dotenv from "dotenv";


const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
connect();


app.post('/register', async (req, res) => {
    if (req.body) {
        const user = await User.register(req.body);
        if (!user) {
            return res.status(400).json({ message: "something went wrong" })
        }
        user.userType
        return res.status(200).json(user)
    }
    res.json({ message: "something went wrong" })
})

app.post('/login', async (req, res) => {
    const user = await User.login(req.body);
    if (user.password == req.body.password) {
        return res.status(200).json(req.body)

    }
    res.json({ message: "something went wrong :l" })
})

app.post('/main', (req, res) => {
    if (req.body) {
        return res.status(200).json(req.body)
    }
    res.json({ message: "something went wrong :l" })
})

app.post('/message', (req, res) => {
    if (req.body) {
        return res.status(200).json(req.body)
    }
    res.json({ message: "something message" })
})

app.post('/api/user', async (req, res) => {
    console.log(req.body);
    const getuser = await User.findOne({ email: req.body.email })
    if (getuser) {
        console.log(userEmail);
        return res.json(getuser)
    }
    res.json({ message: "Wrooooooooooooong" })
})

app.listen(5000, () => console.log("server is running"));

