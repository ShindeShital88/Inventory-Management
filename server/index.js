import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Contact from './Model/Contact.js';



const app = express();
app.use(express.json());
app.use(cors());
const PORT = 9000;



app.listen(PORT, () => {
    console.log('server is responding on 9000')
})
const mongodb = async () => {
    await mongoose.connect("mongodb+srv://shitalshinde:K9PAKPcDOwsd3xwx@cluster0.9g59jnd.mongodb.net/Event")
    console.log("mongodb is connected successfully")
}
mongodb();

app.post('/contact',(req, res)=>{
    const {Name, PhoneNumber, Email, Message} = req.body
    try{
        const allcontact = Contact.create({
            "Name":Name,
            "PhoneNumber":PhoneNumber,
            "Email":Email,
            "Message":Message
        })
        res.json({
            success: true,
            data: allcontact,
            msg: "show all data"
        })
    }
    catch(error){
        res.json({
                success: false,
                msg: error.message
        })
    }
})



app.get('/Contacts', async (req, res) => {
    const dondata = await Contact.find();
    res.json({
        data: dondata
    })
})



app.post('/ragister',(req, res)=>{
    const {Name, Email, Mobile} = req.body
    try{
        const allcontact = Contact.create({
            "Name":Name,
           
            "Email":Email,
           "Mobile":Mobile,
           "Address":Address
        })
        res.json({
            success: true,
            data: allcontact,
            msg: "show all data"
        })
    }
    catch(error){
        res.json({
                success: false,
                msg: error.message
        })
    }
})