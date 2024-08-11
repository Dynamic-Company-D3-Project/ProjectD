import NavbarVertical from "../components/NavbarVerticalAdmin";
import ProviderSelectionCard from "../components/ProviderSelectionCard";
import AdminNavBar from "../components/AdminNavBar";

function PendingCardPage(){
    return(
        <div>
            <AdminNavBar/>
            <div className="row">
                <div className="col-2">
                    <NavbarVertical/>
                </div>
                <div className="col-10 d-flex justify-content-center">
                    <ProviderSelectionCard/>
                </div>
            </div>
        </div>
    )
}

export default PendingCardPage