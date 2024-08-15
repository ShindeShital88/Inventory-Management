import './Contact.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../../Component/Navbar/Navbar.js';
import Footer from '../../Component/Footer/Footer.js';


export default function Contact() {

    const [Contact, setContact] = useState([]);
    const [Name, setName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    const button = async (req, res) => {
        try {
            const create = await axios.post(`http://localhost:7000/contact`, {
                Name: Name,
                PhoneNumber: PhoneNumber,
                Email: Email,
                Message: Message


            })
            console.log(create)
        }
        catch (error) {
            res.json({
                msg: error.Message
            })
        }
    }
    return (
        <>
<Navbar/>
            <div className='contact'>
                <h1 className='get'>GET IN TOUCH</h1>
                <div>
                    <div>

                    </div>
                </div>
            </div>
            {/* <h2 style={{textAlign:'center'}}>Contact Us</h2> */}
            <div className='form'>
                
                <div>
                   
                    <form >
                    
                        Name: <br></br>
                        <input type='text' className='form-div' required onChange={(e) => {
                            setName(e.target.value)

                        }} />

                        <br></br>

                        PhoneNo.:
                        <br></br>
                        <input type='text' className='form-div'   required onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }} />

                        <br></br>

                        Email:
                        <br></br>
                        <input type='text' className='form-div' required onChange={(e) => {
                            setEmail(e.target.value)
                        }} />

                        <br></br>


                        Message:
                        <br></br>
                        <input type='text' className='form-div' required onChange={(e) => {
                            setMessage(e.target.value)
                        }} />

                        <br></br>

                        <button className='btn' onClick={button}>Submit</button>
                    </form>
                </div>
                <div>
                   <h3>Message Us</h3>
                   <p>A Client Service representative will be pleased to accept your phone call, between the <br></br> hours of 9:00 AM to 6:00 PM</p>
                   <h4>Prefer to send us a message?</h4>
                   <p>Use our secure email form to send your message, and we will have the appropriate <br></br> representative get back in touch with you as soon as possible.</p>
                </div>
            </div>


<Footer/>

        </>

    )
}