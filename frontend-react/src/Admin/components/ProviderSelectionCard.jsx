import { StarRating } from "star-ratings-react";
import '../../App.css'
import { useNavigate } from "react-router-dom";
const ReadOnlyStarRating = ({ rating }) => {
    return (
        <div style={{ pointerEvents: 'none'}} className="read-only-star-rating" >
            <StarRating
                maxRating={3}
                rating={rating}
            />
        </div>
    );
};

function ProviderSelectionCard(){
    const Navigate = useNavigate()
    const onAssign=()=>{
        Navigate('/PendingOrders')
    }
    return(
   <div className="mt-3 ">
    <div className="card" style={{borderRadius:20, width:500, height:750, backgroundColor:"grey"}}>
     <div className="card-body">
        <input type="text" className="form-control input-lg mt-3 " placeholder="Sub Catagory"/>
        <select className="form-select input-lg mt-3" >
                            <option value="" disabled selected hidden >Available Providers</option>
                            <option >Provider1</option>
                            <option >Provider2</option>
                            <option >Provider3</option>
        </select>
        <br />
        <div className="card mt-5" style={{borderRadius:10}}>
         <div className="card-body">
            <div className="row">
                <div className="col-5">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190802021607/geeks14.png" alt="User" className="rounded-circle" width="135px"  />
                </div>
                <div className="col-7">
                    <h4 className="mt-5" style={{fontWeight:"bold", fontSize:25}}>Provider Name</h4>
                    <hr />
                </div>
            </div>
            <div className="card mt-3 mr-2 ml-2" style={{borderRadius:10}}>
            <h5 className='card-header text-center'style={{fontSize :24,backgroundColor:"grey"}}>Provider Details</h5>
            <div className="card-body">
               <p></p>
            </div>
            </div>
         </div>
        </div>
        <div className="row mt-3">
            <div className="col-6 d-flex justify-content-end">
                <ReadOnlyStarRating rating={2}/>
            </div>
            <div className="col-6">
                <button onClick={()=>{
                    onAssign()
                }} className="btn btn-primary">Assign</button>
            </div>
        </div>
     </div>
    </div>
   </div>
    );
}

export default ProviderSelectionCard