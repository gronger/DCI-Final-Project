import express from 'express';
import cors from 'cors';
import { User } from './models/user.js';
import { connect } from './libs/database.js';
import dotenv from "dotenv";
import multer from 'multer';
import { File } from './models/file.js';
import jwt from 'jsonwebtoken';


const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
connect();

function checkTokenMiddleware(req, res, next) {
    const tokenRaw = req.headers.authorization;
    console.log(req);
    console.log(`Token raw is: "${tokenRaw}""`);
    if (!tokenRaw) {
        return res.sendStatus(401);
    }

    const tokenToCheck = tokenRaw.split(" ")[1];
    console.log(`Token to check is: "${tokenToCheck}"`);
    if (!tokenToCheck) {
        return res.sendStatus(401);
    }

    jwt.verify(tokenToCheck, process.env.SECRET, (error, payload) => {
        console.log({ error, payload });

        if (error) {
            return res.status(400).send(error.message);
        }

        req.userData = payload;
        next();
    });
}




const upload = multer({ dest: 'uploads/' });

//file upload endpoint
const uploadCheck = upload.fields([{ name: "selectedfile", maxCount: 1 }]);
app.post("/file", uploadCheck, async (req, res) => {
    try {
        await File.create(req.files.selectedfile[0]);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
        return;
    }
    res.json({ succes: true })
});


app.post('/register', uploadCheck, async (req, res) => {
    console.log(req.files);
    console.log(req.body);
    console.log(1111111);
    console.log(req.files.selectedfile[0].originalname);
    console.log(req.files.selectedfile[0].path);

    req.body.originalname = req.files.selectedfile[0].originalname;
    req.body.path = req.files.selectedfile[0].path;


    if (req.body) {
        const user = await User.register(req.body);

        if (!user) {
            return res.status(400).json({ message: "Error from register" })
        }
        user.userType
        return res.status(200).json(user)
    }
    res.json({ message: "Error from register" })
})

app.post('/login', async (req, res) => {
    const user = await User.login(req.body);
    if (user) {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        return res.json({ user, token });
    }
    res.status(400).json({ message: "Error from login" })

})

app.get('/getuser', async (req, res) => {
    const user = await User.find({});
    if (user) {
        return res.json(user)
    }
    res.json({ message: "Error from getuser" })

})

app.get('/getfile', async (req, res) => {
    const user = await File.find({});
    if (user) {
        return res.json(user)
    }
    res.json({ message: "Error from getuser" })

})

app.get('/img*', (req, res) => {

    console.log("here is ur img");
    const file = "." + req.params["0"];
    console.log(file);

    res.download(file); // Set disposition and send it.

})


app.post('/main', (req, res) => {
    if (req.body) {
        return res.status(200).json(req.body)
    }
    res.json({ message: "Error from main" })
})

app.post('/message', (req, res) => {
    if (req.body) {
        return res.status(200).json(req.body)
    }
    res.json({ message: "Error from message" })
})

// app.post('/api/user', async (req, res) => {
//     console.log(req.body);
//     const getuser = await User.findOne({ email: req.body.email })
//     if (getuser) {
//         console.log(userEmail);
//         return res.json(getuser)
//     }
//     res.json({ message: "Error from api/user" })
// })

app.put('/save', checkTokenMiddleware, async (req, res) => {
    //console.log(req);
    //console.log("this is", req.body);

    // Find user using the _id
    User.findById(req.userData._id)
        .then(async userFound => {
            if (!userFound) {
                return res.status(404);
            }
            console.log(userFound);
            const x = await User.updateOne({ _id: req.userData._id }, req.body)
            console.log(x);
            return res.status(200).json(userFound);
        })
        .catch(err => console.log(err))

    // update user data (look at req.body)
    // save updated user
})



app.listen(5000, () => console.log("server is running"));

