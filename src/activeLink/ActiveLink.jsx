import { NavLink } from "react-router-dom";

const ActiveLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? "text-pink-700 font-extrabold" : "" }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
