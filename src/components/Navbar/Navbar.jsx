import { Link } from "react-router-dom";
import "./Navbar.css";
import ActiveLink from "../../activeLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <div className="lg:py-4 header lg:px-6 navbar text-lg bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu text-xl font-bold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/allToys">All Toys</ActiveLink>
            </li>
            {user && (
              <li>
                <ActiveLink to="/myToys">My Toys</ActiveLink>
              </li>
            )}
            <li>
              <ActiveLink to="/blogs">Blogs</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/register">Register</ActiveLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center">
            <img
              className="lg:h-20 w-full h-12"
              src="https://i.ibb.co/ByY5P3X/icon.png"
            />
            <span className="lg:text-4xl font-bold text-pink-600">
              FluffyFriends
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 text-xl font-extralight text-pink-500 menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/allToys">All Toys</ActiveLink>
          </li>
          {user && (
            <li>
              <ActiveLink to="/myToys">My Toys</ActiveLink>
            </li>
          )}
          <li>
            <ActiveLink to="/blogs">Blogs</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/register">Register</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <div className="flex items-center gap-3">
            <small className="text-pink-300 py-1 px-2 rounded-full bg-pink-300">
              aaaaaaaaaaaaaa
            </small>
            <FaUserCircle className="text-4xl text-pink-300"></FaUserCircle>
          </div>
        ) : user ? (
          <div className="flex items-center gap-2">
            <small className="text-white py-1 px-2 rounded-full bg-pink-400">
              {user.email}
            </small>
            <div
              className="tooltip flex items-center gap-2 tooltip-left"
              data-tip={user?.displayName}
            >
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn flex btn-ghost btn-circle avatar"
                >
                  <div className="w-10 border-2 border-pink-500 tooltip rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/addToy">
                      <button>Add a Toy</button>
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-pink-600 border-0">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
