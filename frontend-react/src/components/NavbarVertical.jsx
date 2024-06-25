import { Link } from "react-router-dom";
import '../App.css'

function NavbarVertical(){
    return(
<div >
<nav className ="navbar bg-light">
<ul className ="nav navbar-nav mx-auto" >
<br />
<li className ="nav-item text-center mt-1">
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20190802021607/geeks14.png" alt="User" className="rounded-circle" width="135px"  />
</li>
<br />
<li className ="nav-item text-center ">
<h5>Hello , {"User"}</h5>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/Home">Home
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center" >
<Link to="/UserDetails">Details
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center ">
<Link  to="/Cart">My Cart
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/CurrentBookings">My Bookings
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/Addresses">Address
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/Support">Support
</Link>
</li>
<br />
<br />
<br />
<li className ="nav-item text-center">
<Link to="/Logout">Logout
</Link>
</li>
</ul>
</nav>
</div>
    )
}

export default NavbarVertical