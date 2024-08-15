import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import './Software.css';



export default function Software(){
    return(
<>
<Navbar/>
<div className='main-class-div'>
<p className='bill' style={{fontSize:60}}>Online Cloud Billing Software Designed For Smart Business</p>
<h4 className='high4'>The online billing software makes your business more intelligent. GSTpad online software can manage sales, keep track of payments, create invoices, and also measure business progress. With this software you can automatically send payment reminders.</h4>
</div>
<div>
    <h5 style={{textAlign:'center', marginTop:30}}>Get this Awesome Software</h5>
    <h5  style={{textAlign:'center', marginTop:30}}>Billing/Accounting</h5>
    <h5 className='body'><a href='/ragister'>Get Online Software</a></h5>

    <hr></hr>
</div>
<div>
    <h2 className='content'>Do You Know Why You’re Business Need Online Billing Software?</h2>
    <p style={{fontSize:20, textAlign:'center', marginTop:10, }}>In the offline billing software you have to download the software after that you access it. But in the cloud billing software not need to download the software. Because you can access it from any device PC, laptop, tablet even from your phone. All you need to remember your login ID and password. </p>
    <p style={{fontSize:20, textAlign:'center'}}>Even you can create an invoice with your phone by just scanning the barcode of the produce. The whole date is store into the online server. Online invoice software is quick, easy as well as completely safe software. </p>
</div>
<Footer/>
</>


    )
}