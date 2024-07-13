import { CgMenuGridO } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiInboxArchiveLine, RiInboxUnarchiveLine } from "react-icons/ri";
import { modal } from "../App.jsx";
import colors from "../utils/colors.js";
import Card from "./card.jsx";
import { activeType } from "./Header/index.jsx";

const size = 28;
const colorMain = colors.main[900];

const Footer = ({ setActive, setShowModal, showModal }) => {
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
      <Card.Button>
        <GiSettingsKnobs color={colorMain} size={size} />
      </Card.Button>
    </footer>
  );
};

export default Footer;
