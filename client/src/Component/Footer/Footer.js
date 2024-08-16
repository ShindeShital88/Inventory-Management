import './Footer.css';
import footlogo from './logo.png';
import insta from './instagram.png';
import linked from './linked.png';
import github from './github.png';


export default function Footer(){
    return(
        <>
     <div className='footer'>
<div className='foot-link'>
    <p className='links'>USEFULL LINKS</p>
   <ul> Best GST Billing Software </ul>
   <ul>Billing with Barcode Scanner</ul>
   <ul>GST Billing with Thermal Receipt and Barcode Rolls</ul>
   <ul>Home</ul>
   <ul>Aboutus</ul>
  
   <a href='https://www.instagram.com/shitalshinde8864?utm_source=qr&igsh=MjJkd2l4ZDNtcnU0"'><img className='insta' src={insta} /></a>
              <a href='https://www.linkedin.com/in/shinde-shital-4bb8a9286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img className='insta' src={linked} /></a>
              <a href=''><img className='insta' src={github} /></a>
</div>
<div>
    <img className='foot-logo' src={footlogo}/>
    <ul className='foot-link2'>Address: DreamaSoft, NH-154, Jachh near Jassur
    Distt. <br></br> Kangra, Himachal Pradesh – 176201</ul>
    <ul className='foot-link'>Sales +91 8091058516 , 7807758516</ul>
   <ul className='foot-link'>  Support +91 7876095781 , 8580596481</ul>
</div>
     </div>

        </>
    )
}