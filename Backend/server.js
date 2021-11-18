import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    if (req.body) {
        return res.status(200).json(req.body)
    }
    res.json({message: "something went wrong :l"})
})



app.listen(5000, () =>console.log("server is running"));

