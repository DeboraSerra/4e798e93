import React, { useContext } from "react";
import { LuSettings2 } from "react-icons/lu";
import { PiNumpad } from "react-icons/pi";
import {
  RiInboxArchiveLine,
  RiInboxUnarchiveLine,
  RiUserAddLine,
} from "react-icons/ri";
import colors from "../utils/colors.js";
import { context, modal } from "../utils/context.jsx";
import Card from "./card.jsx";

const size = 28;
const colorMain = colors.main[900];

const Footer = () => {
  const { setState } = useContext(context);

  const handleOpenModal = (type) => {
    setState((prev) => ({
      ...prev,
      showModal: prev.showModal === type ? modal.none : type,
    }));
  };

  return (
    <footer className='footer'>
      <Card.Button onClick={() => handleOpenModal(modal.callFail)}>
        <RiUserAddLine color={colorMain} size={size} />
      </Card.Button>
      <Card.Button onClick={() => handleOpenModal(modal.archive)}>
        <RiInboxArchiveLine color={colorMain} size={size} />
      </Card.Button>
      <Card.Button
        className='menu'
        onClick={() => {
          handleOpenModal(modal.call);
        }}
      >
        <PiNumpad color={colors.main[100]} size={size * 1.5} />
      </Card.Button>
      <Card.Button onClick={() => handleOpenModal(modal.retrieve)}>
        <RiInboxUnarchiveLine color={colorMain} size={size} />
      </Card.Button>
      <Card.Button onClick={() => handleOpenModal(modal.callFail)}>
        <LuSettings2 color={colorMain} size={size} />
      </Card.Button>
    </footer>
  );
};

export default Footer;
