import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="py-4 header px-6 navbar text-lg bg-base-200">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>All Toys</Link>
            </li>
            <li>
              <Link>My Toys</Link>
            </li>
            <li>
              <Link>Add a Toy</Link>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center">
            <div>
              <img
                style={{ height: "60px" }}
                src="https://i.ibb.co/ByY5P3X/icon.png"
                alt=""
              />
            </div>
            <span className="text-4xl font-bold text-pink-500">
              FluffyFriends
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-pink-500 menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>All Toys</Link>
          </li>
          <li>
            <Link>My Toys</Link>
          </li>
          <li>
            <Link>Add a Toy</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn bg-pink-500 border-0">Login</button>
        </Link>
        <div className="tooltip tooltip-bottom" data-tip="hello">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 tooltip rounded-full">
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"/>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
