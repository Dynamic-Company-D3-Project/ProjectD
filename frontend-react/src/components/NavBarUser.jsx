import { Link, useNavigate } from 'react-router-dom';

function NavBarUser() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('email');
    navigate('/'); // Navigate to home or login page after logout
  };

  return (
    <div>
      <div className="navbar bg-base-100" style={{ backgroundColor: '#FFBF78' }}>
        <div className="flex-none">
          <Link className="btn btn-ghost text-xl" to="/">
            QUIKEASY
          </Link>
        </div>
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to="/services">
            View All Services
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--boys-male-man-pack-avatars-icons-5187865.png?f=webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/account" className="justify-between">
                  Account
                </Link>
              </li>
              <li>
                <Link to="/cart">MyCart</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarUser;
