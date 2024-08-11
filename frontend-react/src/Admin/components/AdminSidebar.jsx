import { Link, useNavigate } from "react-router-dom";
import '../../App.css'

function AdminSidebar(){
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
<Link to="/admin/dashboard">Dashboard
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center" >
<Link to="/admin/orders-ongoing">Ongoing Orders
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center ">
<Link  to="/admin/orders-pending">Pending Orders
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/admin/orders">All Orders
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/admin/category">Sub Catagory
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/admin/list-provider">Providers List
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/admin/details-user">User Info
</Link>
</li>
<br />
<br />
<li className ="nav-item text-center">
<Link to="/admin/support-provider">Support
</Link>
</li>
<br />
<br />
<br />
<li className ="nav-item text-center">
<Link to="/admin/login">Logout
</Link>
</li>
</ul>
</nav>
</div>
    )
}

export default AdminSidebar