import NavBarUser from "../components/NavBarUser";
import NavbarVertical from "../components/NavbarVertical";
import Footer from "../components/Footer";

function UserDetails() {
  return (
    <div className="page-container">
      <NavBarUser />
      <div className="content-container container-fluid">
        <div className="row">
          <div className="col-2">
            <NavbarVertical />
          </div>
          <div className="col-10">
            <div className="categoryHeader page-header fw-bold text-3xl">
              <h2>Personal Information</h2>
            </div>

            <div className="row mt-5">
              <div className="col-6">
                <input
                  className="form-control input input-bordered "
                  type="text"
                  name="FirstName"
                  placeholder="First Name"
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control input input-bordered  "
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-6">
                <input
                  className="form-control input input-bordered "
                  type="email"
                  name="Email"
                  placeholder="Email"
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control input input-bordered  "
                  type="mobile"
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-6">
                <textarea
                  placeholder="Address"
                  type="Address"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                ></textarea>
              </div>
              <div className="col-6">
                <div className="col-4 mb-3">
                  <input
                    className="form-control input input-bordered "
                    type="date"
                  />
                </div>
                <div className="col-4 form-group">
                  <select className="form-select input input-bordered ">
                    <option value="" disabled selected hidden>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
}
export default UserDetails;
