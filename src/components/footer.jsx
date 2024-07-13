import PropTypes from "prop-types";
import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiInboxArchiveLine, RiInboxUnarchiveLine } from "react-icons/ri";
import colors from "../utils/colors.js";
import Card from "./card.jsx";
import { activeType } from "./Header/index.jsx";
import { modal } from "./modal.jsx";

const size = 28;
const colorMain = colors.main[900];

const Footer = ({ setActive, setShowModal }) => {
  return (
    <footer className='footer'>
      <Card.Button onClick={() => setShowModal(modal.call)}>
        <FiPhone color={colorMain} size={size} />
      </Card.Button>
      <Card.Button onClick={() => setShowModal(modal.archive)}>
        <RiInboxArchiveLine color={colorMain} size={size} />
      </Card.Button>
      <Card.Button className='menu' onClick={() => setActive(activeType.all)}>
        <CgMenuGridO color={colors.main[100]} size={size * 1.5} />
      </Card.Button>
      <Card.Button onClick={() => setShowModal(modal.retrieve)}>
        <RiInboxUnarchiveLine color={colorMain} size={size} />
      </Card.Button>
      <Card.Button onClick={() => {}}>
        <GiSettingsKnobs color={colorMain} size={size} />
      </Card.Button>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  setActive: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
