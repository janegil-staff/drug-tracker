import { useContext } from "react";
import "./NavBar.css";
import {
  ChatRightDotsFill,
  TrophyFill,
  PersonFill,
  PeopleFill,
  CashCoin,
} from "react-bootstrap-icons";
import { AuthContext } from "../../context/auth-context";
import { useAuth } from "../../hooks/auth-hook";

const Navbar = (props) => {
  const auth = useContext(AuthContext);
  const logoutHandler = () => {
    auth.logout();
  };
  return (
    <nav className={'navbar'}>
      <ul>
        <li className="nav-link">
          <PeopleFill onClick={logoutHandler} />
        </li>
        <li className="nav-link">
          <TrophyFill />
        </li>
        <li className="nav-link">
          <ChatRightDotsFill />
        </li>
        <li className="nav-link">
          <CashCoin />
        </li>
        <li className="nav-link">
          <PersonFill />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
