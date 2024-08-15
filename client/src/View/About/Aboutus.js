import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import './Aboutus.css';
import Gst from './GST.jpg';


export default function About(){
    return(
<>
<Navbar/>
<div className='about-main'>
    <div>
      <h2 style={{fontSize:50, marginTop:60,  marginLeft:20}}>About Company</h2>
      <p style={{fontSize:20, marginTop:20, marginLeft:20}}>We are an innovative IT company. Headquarter in the “Land of the Gods” Himachal Pradesh Founded in 2015, subsidiary of DreamaSoft. Our mission is to provide easy and best Billing, Accounting, Barcoding Solution for our customers. We are well known for our superior quality of work and with full satisfaction to the customers.We deliver business software to small as well as medium businesses and it is our passion to satisfy them with our services.</p>
    </div>
    <div>
        <img style={{height:400, width:400, borderRadius:90, margin:10}} src={Gst}/>
    </div>
</div><br></br>
<hr></hr>
<div>
    <h1 style={{textAlign:'center', marginTop:60,}}>One Stop Affordable Solution</h1>
    <p style={{fontSize:19, textAlign:'center', margin:50}}>We provide all the solution you need to fulfill you business needs, From software to hardware at very affordable price so that you don’t need to worry at all. We are well known for our sprier quality of work and with full satisfaction to the customers.</p>

</div>
<div>
    <h1 style={{fontSize:60, textAlign:'center',}}>Customers reviews</h1>
    
</div>
<div className='review'>
    <div className='review-div'>
     <p style={{padding:30,}}>I have purchased Software and hardware from gstpad and they give me full service support in hardware and i am fully satisfied with their services.</p>
    <h4 style={{textAlign:'center'}}>Ritvik Avasthi</h4>
    </div>
    <div className='review-div'>
<p  style={{padding:30,}}>Now I don't need to sit in my shop all the time, With the help of this software I can create user with specific permissions</p>
    <h4 style={{textAlign:'center'}}>Bhagwati thakur</h4>
    
    </div>
    <div className='review-div'>
<p style={{padding:30,}}>Software is very simple and user friendly. All my staff can easilty operate it. My father not familiar with computes but he operate this software like a pro.</p>
<h4 style={{textAlign:'center',}}>Mayank hassan</h4>


</div>
</div>
<h5 style={{marginLeft:50}}>Our Purpose:</h5>
<p style={{marginLeft:50, fontSize:20}}>-To Make Billing Easy.</p>
<p style={{marginLeft:50, fontSize:20}}>-To Make Customers Happy.</p>
<p style={{marginLeft:50, fontSize:20}}>-To Make Accounting Time Efficient.</p>
<p style={{marginLeft:50, fontSize:20}}>-To Make The GST Calculation Easier.</p>
<p style={{marginLeft:50, fontSize:20}}>-To Make GST Billing Software Cost Efficient.</p>
<p style={{marginLeft:50, fontSize:20}}>-To Make GST Billing Software User-Friendly.</p>
<p style={{marginLeft:50, fontSize:20}}>-To Make GST Billing Easy With The Barcode.</p>
<Footer/>
</>


    )
}