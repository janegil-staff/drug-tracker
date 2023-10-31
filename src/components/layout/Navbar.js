import classes from "./NavBar.module.css";
import {
  ChatRightDotsFill,
  TrophyFill,
  PersonFill,
  PeopleFill,
  CashCoin,
} from "react-bootstrap-icons";


const Navbar = () => {

  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <a href="/">
            <PeopleFill   />
          </a>
        </li>
        <li>
          <a href="/">
            <TrophyFill />
          </a>
        </li>
        <li>
          <a href="/">
            <ChatRightDotsFill />
          </a>
        </li>
        <li>
          <a href="/">
            <CashCoin />
          </a>
        </li>
        <li>
          <a href="/">
            <PersonFill />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
