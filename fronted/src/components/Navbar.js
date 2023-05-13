import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="footer">
        <Link to="/">
          <h1>Trello App</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
