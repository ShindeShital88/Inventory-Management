
import './Sign.css';
import { useState} from 'react';
import axios from 'axios'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';


export default function Data(){
    // const [sign, setSign] = useState([])    
    const [UserName, setUserName] = useState();
    const [EmailID, setEmailID] = useState();
    const [Password, setPassword]= useState();
    const [Address, setAddress]= useState();

const SignupData = async()=>{
    await axios.post(`http://localhost:9000/Sign`, {
        UserName:UserName, 
        EmailID:EmailID,
        Password:Password,
        Address:Address
    })

}
// const LoginData= async()=>{
//     const logdata = await axios.post(`http://localhost:5000/Sign`,{
//        UserName:UserName,
//        Password:Password 
//     })
// }
// const signin = async()=>{
//     const signdata= await axios.get(`http://loacalhost:5000/Signs`)
//     setSign(signdata.data.data)
// }
// useEffect(
//     () => {
//      Signin();
//     }, []
// )

return(
    <>
    <Navbar/>
    <div className='div'>
    <h1 className='heading'>Sign Up</h1>
    {/* <p className='heading'>Create Your Account</p> */}
    <form>
    
         <div className='input'>
         
<input type='text' className='btn-input' onChange={(e)=>{setUserName(e.target.value)}} placeholder='Username'    /><br></br><br></br>

<input type='text' className='btn-input'  onChange={(e)=>{setEmailID(e.target.value)}} placeholder='EmailID'/><br></br><br></br>

<input type='password' className='btn-input'  onChange={ (e)=>{setPassword(e.target.value) }} placeholder='Password'/><br></br><br></br>

<input type='text' className='btn-input' onChange={(e)=>{setAddress(e.target.value)}} placeholder='Address'/><br></br><br></br>

<button className='Button'  onClick={SignupData}>Sign Up</button>
 
</div>
    </form>
    {/* {
        sign.map((signdata)=>{
            <div>
                <h1>{signdata.UserName}</h1>
                <h2>{signdata.EmailID}</h2>
                <h2>{signdata.Password}</h2>
                <h3>{signdata.Address}</h3>
            </div>
            
        })
    } */}

</div>
<br></br>
    <Footer/>
    
    </>
)

}
