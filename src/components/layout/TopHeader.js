import { useContext, useState } from "react";
import Button from "../FormElements/Button";

import "./TopHeader.css";

const TopHeader = () => {
  return (
    <>
      <nav className={"nav-top"}>
        <header className="nav-top__header">
          <h1>Drug Tracker</h1>
        </header>
      </nav>
    </>
  );
};

export default TopHeader;
