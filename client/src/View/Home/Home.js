import './Home.css';
import Navbar from '../../Component/Navbar/Navbar.js';
import Footer from '../../Component/Footer/Footer.js';


export default function Home(){
    return(
        <>
        <Navbar/>
      <div className='main-home'>
      </div>
      {/* <div> <h2 className='home-text'>All-in-one Billing & Accounting Software</h2></div> */}
     <div className='home-div'>
<h3 className='home-para'>Non-GST & GST Billing Software with Revolutionary Accounting
↓ Some Key Features ↓</h3>
     </div>
     <Footer/>
        </>
       
    )
}