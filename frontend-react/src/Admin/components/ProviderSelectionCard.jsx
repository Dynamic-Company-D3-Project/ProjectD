import { StarRating } from "star-ratings-react";
import '../../App.css'
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import config  from "../../config";
import { Card } from "react-bootstrap";

//TODO
function ProviderSelectionCard({order}){
    console.log("inside Card", order)
    const Navigate = useNavigate()
    const onAssign= async ()=>{
        try {
            const response = await axios.put(config.dotNetApi+`Admin/bookings/${order.bookingId}/assign`,{
                
  "status": "ASSIGNED",
  "providerId": selectedProvider.id

            }).then(
                Navigate('/admin/dashboard')
            ); // Replace with your API endpoint
            console.log(response.data)
            
          } catch (error) {
              prompt(error);
            console.error("Error fetching providers:", error);
          }
        //Navigate('/PendingOrders')
    }
    const [providers, setProviders]= useState([]);
    const [selectedProvider, setSelectedProvider] = useState("");
    useEffect(() => {
        // Fetch the providers when the component mounts
        const fetchProviders = async () => {
          try {
            const response = await axios.get(config.dotNetApi+"admin/Provider"); // Replace with your API endpoint
            
            setProviders(response.data);
          } catch (error) {
            console.error("Error fetching providers:", error);
          }
        };
    
        fetchProviders();
      }, []);
      const handleProviderChange = (e) => {
        const provider = providers.find(p => p.id === parseInt(e.target.value, 10));
        setSelectedProvider(provider);
        console.log(e.target.value)
      };
    return(
        <div className="mt-3 p-4">
  <div className="card bg-gray-200 rounded-lg shadow-lg mx-auto" style={{ maxWidth: '600px', width: '100%' }}>
    <div className="card-body">
        <h3 className="text-2xl font-bold">Subcategory Id</h3>
      <input
        type="text"
        className="form-control input-lg mt-3"
        placeholder="Sub Category"
        value={order.subcategoryId}
      />
      <select
        className="form-select input-lg mt-3"
        value={selectedProvider?.id || ''}
        onChange={handleProviderChange}
      >
        <option value="" disabled hidden>
          Available Providers
        </option>
        {providers.map((provider) => (
          <option key={provider.id} value={provider.id}>
            {provider.firstName} {provider.lastName}
          </option>
        ))}
      </select>

      <div className="card mt-5 bg-white rounded-lg shadow-md">
        <div className="card-body p-4">
          {selectedProvider && (
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp"
                alt="User"
                className="rounded-full w-32 h-32 object-cover"
              />
              <div className="ml-0 md:ml-4 mt-4 md:mt-0">
                <h4 className="text-2xl font-bold">{`${selectedProvider.firstName} ${selectedProvider.lastName}`}</h4>
                <hr className="my-2" />
                <div className="mt-3">
                  {/* <h5 className="text-xl font-semibold bg-gray-300 p-2 rounded">Provider Details</h5> */}
                  <div className="mt-2">
                    <table className="min-w-full text-sm text-gray-600">
                      <tbody>
                        <tr>
                          <td className="font-semibold">Email:</td>
                          <td>{selectedProvider.email}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Gender:</td>
                          <td>{selectedProvider.gender}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Phone Number:</td>
                          <td>{selectedProvider.phoneNumber}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">City:</td>
                          <td>{selectedProvider.city}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 flex justify-center">
          <button
            onClick={onAssign}
            className="btn btn-primary w-full md:w-auto"
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


    );
}

export default ProviderSelectionCard