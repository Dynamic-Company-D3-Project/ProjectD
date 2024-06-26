import { Link, useNavigate } from "react-router-dom";
import '../../App.css'

function NavbarVerticalAdmin(){
    return(
<div >
<nav className ="navbar bg-light">
<ul className ="nav navbar-nav mx-auto" >
<br />
<li className ="nav-item text-center ">
<h5 style={{fontWeight:"bold", fontSize:25}}>Hello , {"User"}</h5>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/Dashboard">Dashboard
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center" >
<Link to="/OngoingOrders">Ongoing Orders
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center ">
<Link  to="/PendingOrders">Pending Orders
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/AllOrders">All Orders
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/SubCatagory">Sub Catagory
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/ProviderList">Providers List
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/UserInfo">User Info
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/ProviderSupport">Support
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

export default NavbarVerticalAdmin