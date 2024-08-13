import NavbarVertical from "../components/NavbarVerticalAdmin";
import ProviderSelectionCard from "../components/ProviderSelectionCard";
import AdminNavBar from "../components/AdminNavBar";

import { useLocation } from 'react-router-dom';

function PendingCardPage(){
    // const data = Object.fromEntries(searchParams.entries());
    const location = useLocation();
  const  order  = location.state?.order;
  
  
   
    return(
        <div>
            <AdminNavBar/>
            <div className="row">
                <div className="col-2">
                    <NavbarVertical/>
                </div>
                <div className="col-10 d-flex justify-content-center">
                    <ProviderSelectionCard
                    order={order}
                    />
                </div>
            </div>
        </div>
    )
}

export default PendingCardPage