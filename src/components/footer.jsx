import React, { useContext } from "react";
import { LuSettings2 } from "react-icons/lu";
import { PiNumpad } from "react-icons/pi";
import {
  RiInboxArchiveLine,
  RiInboxUnarchiveLine,
  RiUserAddLine,
} from "react-icons/ri";
import colors from "../utils/colors.js";
import { context, MODAL } from "../utils/context.jsx";
import Card from "./card.jsx";

const SIZE = 28;
const COLOR_MAIN = colors.main[900];

const Footer = () => {
  const { setState } = useContext(context);

  const handleOpenModal = (type) => {
    setState((prev) => ({
      ...prev,
      showModal: prev.showModal === type ? MODAL.none : type,
    }));
  };

  return (
    <footer className='footer'>
      <Card.Button onClick={() => handleOpenModal(MODAL.callFail)}>
        <RiUserAddLine color={COLOR_MAIN} size={SIZE} />
      </Card.Button>
      <Card.Button onClick={() => handleOpenModal(MODAL.archive)}>
        <RiInboxArchiveLine color={COLOR_MAIN} size={SIZE} />
      </Card.Button>
      <Card.Button
        className='menu'
        onClick={() => {
          handleOpenModal(MODAL.call);
        }}
      >
        <PiNumpad color={colors.main[100]} size={SIZE * 1.5} />
      </Card.Button>
      <Card.Button onClick={() => handleOpenModal(MODAL.retrieve)}>
        <RiInboxUnarchiveLine color={COLOR_MAIN} size={SIZE} />
      </Card.Button>
      <Card.Button onClick={() => handleOpenModal(MODAL.callFail)}>
        <LuSettings2 color={COLOR_MAIN} size={SIZE} />
      </Card.Button>
    </footer>
  );
};

export default Footer;
