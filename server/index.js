import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Contact from './Model/Contact.js';
import Sign from './Model/Sign.js';



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




app.post('/Sign',(req, res)=>{
    const {UserName, EmailID , Password , Address}= req.body
    try{
        const Data = Sign.create({
            "UserName":UserName,
            "EmailID":EmailID,
            "Password":Password,
            "Address":Address
        })
        res.json({
            success:true,
            data:Data,
            msg:" data fetch successfully"
        })
    }
    catch(error){
        res.json({
            successfalse,
            msg:error.message
        })
    }

   })
   app.get('/Sign/:_id', async(req, res)=>{
    const {_id} = req.params;
    const databyid = await Sign.findOne({_id:_id});
    res.json({
        success:true,
        id :_id,
        data: databyid
        // msg:`data fetch successfully`
    })
 })
 app.get('/Signs',async(req, res)=>{
    const Alldata = await Sign.find();
    res.json({
    data:Alldata
    })
   
 })


 
app.post('/login',(req, res)=>{
    const { Emailaddress, Password} =req.body
    try{
        const logdata=Sign.create({
           " Emailaddress":Emailaddress,
          "  Password":Password
        })
        res.json({
            success:true,
            data:logdata,
            msg:"login successfully"
        })
    }catch(error){
        res.json({
            success:false,
            msg:error.msg
        })
    }
})

app.get('/logins', async(req , res)=>{
    const logs = await Sign.find();
    res.json({
        data:logs
    })
})
