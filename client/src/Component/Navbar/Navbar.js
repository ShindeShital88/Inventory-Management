import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
export  default function Navbar(){

return(
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top nav-class">
  <div class="container-fluid">
    <a class="navbar-brand" className='home' href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" className='home' href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" className='home' href="#">AboutUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" className='home' href="#">Pricing&Features</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" className='home' href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu"  aria-labelledby="navbarDropdownMenuLink" >
            <li><a class="dropdown-item" className='home' href="/Contact">Contact Us</a></li>
            <li><a class="dropdown-item" className='home' href="#">Another</a></li>
            <li><a class="dropdown-item" className='home' href="#">Something </a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
)}