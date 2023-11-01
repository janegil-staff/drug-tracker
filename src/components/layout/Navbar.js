import "./NavBar.css";
import {
  ChatRightDotsFill,
  TrophyFill,
  PersonFill,
  PeopleFill,
  CashCoin,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";
const Navbar = () => {
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
  };

  return (
    <nav className={"navbar"}>
      <ul>
        <li className="nav-link">
          <PeopleFill onClick={logoutHandler} />
        </li>
        <li className="nav-link">
          <Link to="/trophies">
            <TrophyFill />
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/posts">
            <ChatRightDotsFill />
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/entries">
            <CashCoin />
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/profile">
            <PersonFill />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
