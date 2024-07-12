import PropTypes from "prop-types";
import React from "react";
import Logo from "./logo.jsx";

const Header = ({ active, setActive }) => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li
            className={`header__link ${active === "all" ? "active" : ""}`}
            role='button'
            onClick={() => setActive("all")}
          >
            Inbox
          </li>
          <li
            className={`header__link ${active === "archive" ? "active" : ""}`}
            role='button'
            onClick={() => setActive("archive")}
          >
            Archived calls
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  active: PropTypes.oneOf(["all", "archive"]),
  setActive: PropTypes.func,
};
