import { useEffect, useState } from 'react';
import './Login.css';
import axios from 'axios';
import Navbar from '../../Component/Navbar/Navbar.js';
import Footer from '../../Component/Footer/Footer.js';


export default function Signin(){

    const [Emailaddress , setEmailaddress] = useState('');
    const [Password, setPassword]= useState('');


    const logindata =async()=>{
        await  axios.post(`http://localhost:9000/login`,{
            Emailaddress:Emailaddress,
            Password:Password
        }

        )
    }

    const out =async ()=>{
        await axios.get(`http://localhost:9000/logins`)
    }
    useEffect(
        ()=>{
out()
        },[]
    )
    return(

<>
<Navbar/>
<div className='back'>
      <div className='Data'>
    
          <p className='login'>Signin</p><b />

           {/* <p className=''>Enter the mail to continue</p> */}
          <input type='text' placeholder='Enter the Email'required className='function' onChange={(e)=>{setEmailaddress(e.target.value)}}/><br></br>
         
          <input type='password' placeholder='password' required className='function' onChange={(e)=>{setPassword(e.target.value)}} /> <br></br>

         
        <button onClick={logindata} className='funyy'>Submit</button>

        
        </div>
        
        </div>
        <br></br>
<Footer/>
</>



    )
}