
import './Ragister.css';
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Ragister(){

    const [FullName, setFullName]= useState('');
    const [Email, setEmail] =useState('');
    const[ Mobile, setMobile]= useState('')
   const [Address, setAddress]=useState('');

    const ragister = async (req, res) => {
        try {
            const create = await axios.post(`http://localhost:7000/ragister`, {
                FullName: FullName,
              Email: Email,
             Mobile:Mobile,
              Address:Address

            })
            console.log(create)
            //  toast.success("register successfully")
        }
        catch (error) {
            res.json({
                msg: error.Message
            })
        }
    }
    // toast.success("register successfully")
   
    return(

<>
<Navbar/>
<h2 style={{textAlign:'center', marginTop:90,}}>Register Here</h2>
<div className='ragister'>
    
 <input type='text' className='input' onChange={(e)=>{
    setFullName(e.target.value)
}} placeholder=' FullName' />  <br></br>

<input type='text' className='input' onChange={(e)=>{
    setEmail(e.target.value)
}} placeholder='Email'/>
<br></br>


<input type='text' className='input' onChange={(e)=>{
    setMobile(e.target.value)

}} placeholder=' Mobile Number'/><br></br>

<input type='text' className='input' onChange={(e)=>{
    setAddress(e.target.value)
}} placeholder='Address' /><br></br>

<button className='input1' onClick={ragister}>Register</button>
</div>
<ToastContainer />
<br></br>
<Footer/>
</>



    )
}