import './Home.css';
import Navbar from '../../Component/Navbar/Navbar.js';
import Footer from '../../Component/Footer/Footer.js';
import mobile from './mobile.png';
import mobile2 from './mobile2.png';
import device from  './device.png';
import multi from './multi.png';
import software from './software.png';
import software2 from './software2.png';
export default function Home(){
    return(
        <>
        <Navbar/>
      <div className='main-home'>
      </div>
      {/* <div> <h2 className='home-text'>All-in-one Billing & Accounting Software</h2></div> */}
     <div className='home-div'>
      <h3 className='home-para' >Non-GST & GST Billing Software with Revolutionary Accounting
↓ Some Key Features ↓</h3>
     </div>
     <div className='feature'>
      <div>
        <img className='mobile' src={mobile}/>
      </div>
      <div className='order'>
        <h5>Online Store With A.I. Images</h5>
        <p>Create your Online Store quickly with A.I. generated images for your products and start Selling your products online to your customers, share store link and display your products, customer can query or place order online.</p>
      </div>
      <div  >
        <img className='mobile' src={mobile2}/>
      </div>
      <div className='order'>
        <h5>Invoice Sharing & Feedback</h5>
        <p>Invoice/Bill Link is automatically shared to customers on SMS or WhatsApp along with UPI Pay Button and option to give you feedback of customer experience/sales person, feedbacks are only visible to you so that you know customers are happy and satisfied.</p>
      </div>
    </div>
    <div className='feature'>
      <div>
        <img className='mobile' src={device}/>
      </div>
      <div className='order'>
        <h5>Online Store With A.I. Images</h5>
        <p>Create your Online Store quickly with A.I. generated images for your products and start Selling your products online to your customers, share store link and display your products, customer can query or place order online.</p>
      </div>
      <div  >
        <img className='mobile' src={multi}/>
      </div>
      <div className='order'>
        <h5>Multi-Users(Assign Permissions)</h5>
        <p>Create Multiple users and assign them permissions according to their rolls so that they cannot do any unauthorized modifications with records</p>
      </div>
    </div>
   
<div className='main-image'>
<div>
    <img className='logos' src={software}/>
</div>
<div>
    <img className='logos' src={software2}/>
</div>
</div>
     <Footer/>
        </>
       
    )
}