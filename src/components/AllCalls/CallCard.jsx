import dayjs from "dayjs";
import PropTypes from "prop-types";
import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { MdOutlinePhoneMissed, MdVoicemail } from "react-icons/md";
import { VscCallIncoming } from "react-icons/vsc";
import colors from "../../utils/colors";
import Card from "../card.jsx";
import { activeType } from "../Header/index.jsx";
import { modal } from "../Modal/modal.jsx";

const size = 20;

const CallType = {
  missed: <MdOutlinePhoneMissed color={colors.red} size={size} />,
  answered: <VscCallIncoming color={colors.accent[700]} size={size} />,
  voicemail: <MdVoicemail color={colors.main[900]} size={size} />,
};

const CallCard = ({
  call,
  moreInfo,
  setMoreInfo,
  setShowModal,
  setPhone,
  active,
}) => {
  const handleMoreInfoClick = () => {
    if (moreInfo === call.id) {
      setMoreInfo("");
    } else setMoreInfo(call.id);
  };

  return (
    <Card>
      <Card.Content onClick={handleMoreInfoClick}>
        {CallType[call.call_type]}
        <div className='card__info'>
          <Card.Text className='card__text--title'>{call.to}</Card.Text>
          <Card.Text>{call.duration}</Card.Text>
        </div>
        <Card.Text className='card__text--time'>
          {dayjs(call.created_at).format("HH[:]MM")}
        </Card.Text>
      </Card.Content>
      {moreInfo === call.id ? (
        <Card.Body>
          <Card.Button
            onClick={() => {
              setShowModal(modal.call);
              setPhone(String(call.to));
            }}
          >
            <FiPhoneCall color={colors.main[900]} size={size} />
            <Card.Text>
              {call.direction === "inbound" ? "Call back" : "Try again"}
            </Card.Text>
          </Card.Button>
          <Card.Button onClick={() => setShowModal(modal.callFail)}>
            <BiMessageDetail color={colors.main[900]} size={size} />
            <Card.Text>Send message</Card.Text>
          </Card.Button>
          <Card.Button onClick={() => setShowModal(modal.archiveOne)}>
            <FiArchive color={colors.main[900]} size={size} />
            <Card.Text>
              {active === activeType.all ? "Archive" : "Retrieve"} call
            </Card.Text>
          </Card.Button>
        </Card.Body>
      ) : null}
    </Card>
  );
};

export default CallCard;

CallCard.propTypes = {
  call: PropTypes.exact({
    direction: PropTypes.oneOf(["inbound", "outbound"]),
    from: PropTypes.number,
    to: PropTypes.number,
    via: PropTypes.number,
    duration: PropTypes.number,
    is_archived: PropTypes.bool,
    call_type: PropTypes.oneOf(["missed", "answered", "voicemail"]),
    id: PropTypes.string,
    created_at: PropTypes.string,
  }).isRequired,
  moreInfo: PropTypes.string.isRequired,
  setMoreInfo: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
  active: PropTypes.oneOf(Object.values(activeType)),
};
