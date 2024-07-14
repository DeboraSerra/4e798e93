import React, { useContext } from "react";
import { activeType, context } from "../../utils/context.jsx";
import Logo from "./logo.jsx";

const Header = () => {
  const { active, setState } = useContext(context);

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
            onClick={() =>
              setState((prev) => ({ ...prev, active: activeType.all }))
            }
          >
            Inbox
          </li>
          <li
            className={`header__link ${
              active === activeType.archive ? "active" : ""
            }`}
            role='button'
            onClick={() =>
              setState((prev) => ({ ...prev, active: activeType.archive }))
            }
          >
            Archived calls
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
