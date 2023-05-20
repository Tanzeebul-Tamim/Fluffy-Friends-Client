import { NavLink } from "react-router-dom";

const ActiveLink = ({to, children}) => {
  console.log(to)
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? "text-white font-bold" : "" }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
