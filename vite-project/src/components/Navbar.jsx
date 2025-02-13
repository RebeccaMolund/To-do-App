import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link className="a" to="/">
        Home
      </Link>
      <Link className="a" to="/about">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
