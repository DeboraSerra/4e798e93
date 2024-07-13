import PropTypes from "prop-types";
import React from "react";
import Logo from "./logo.jsx";

export const activeType = {
  all: 0,
  archive: 1,
};

const Header = ({ active, setActive }) => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li
            className={`header__link ${
              active === activeType.all ? "active" : ""
            }`}
            role='button'
            onClick={() => setActive(activeType.all)}
          >
            Inbox
          </li>
          <li
            className={`header__link ${
              active === activeType.archive ? "active" : ""
            }`}
            role='button'
            onClick={() => setActive(activeType.archive)}
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
  active: PropTypes.oneOf(Object.values(activeType)),
  setActive: PropTypes.func,
};
