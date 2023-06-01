import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import Contact from "./models/Contact.js"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express()


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

const port = process.env.PORT || 6001

app.post("/contact", async (req, res) => {
    try {
        const { name, email, info } = req.body
        const newContact = new Contact({
            name: name,
            email: email,
            info: info
        });
        await newContact.save();
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.listen(port, () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected to database")
    }).catch((error) => console.log(`${error} did not connect`));
    console.log(`Listening on ${port}`)
})