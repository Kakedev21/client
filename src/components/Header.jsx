import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/areas">Areas</a>
          </li>
          <li>
            <a href="/register">Booking</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
