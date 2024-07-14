import React, { useContext } from "react";
import { ACTIVE_TYPE, context } from "../../utils/context.jsx";
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
              active === ACTIVE_TYPE.all ? "active" : ""
            }`}
            role='button'
            onClick={() =>
              setState((prev) => ({ ...prev, active: ACTIVE_TYPE.all }))
            }
          >
            Inbox
          </li>
          <li
            className={`header__link ${
              active === ACTIVE_TYPE.archive ? "active" : ""
            }`}
            role='button'
            onClick={() =>
              setState((prev) => ({ ...prev, active: ACTIVE_TYPE.archive }))
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
