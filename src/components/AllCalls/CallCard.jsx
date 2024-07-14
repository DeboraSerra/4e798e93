import dayjs from "dayjs";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { MdOutlinePhoneMissed, MdVoicemail } from "react-icons/md";
import { VscCallIncoming } from "react-icons/vsc";
import colors from "../../utils/colors";
import { ACTIVE_TYPE, context, MODAL } from "../../utils/context.jsx";
import Card from "../card.jsx";

const SIZE = 20;

const CallType = {
  missed: <MdOutlinePhoneMissed color={colors.red} size={SIZE} />,
  answered: <VscCallIncoming color={colors.accent[700]} size={SIZE} />,
  voicemail: <MdVoicemail color={colors.main[900]} size={SIZE} />,
};

const CallCard = ({ call }) => {
  const { moreInfo, active, setState } = useContext(context);

  const handleMoreInfoClick = () => {
    let id;
    if (moreInfo === call.id) {
      id = "";
    } else id = call.id;
    setState((prev) => ({ ...prev, moreInfo: id }));
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
              setState((prev) => ({
                ...prev,
                showModal: MODAL.callFail,
              }));
            }}
          >
            <FiPhoneCall color={colors.main[900]} size={SIZE} />
            <Card.Text>
              {call.direction === "inbound" ? "Call back" : "Try again"}
            </Card.Text>
          </Card.Button>
          <Card.Button
            onClick={() =>
              setState((prev) => ({ ...prev, showModal: MODAL.callFail }))
            }
          >
            <BiMessageDetail color={colors.main[900]} size={SIZE} />
            <Card.Text>Send message</Card.Text>
          </Card.Button>
          <Card.Button
            onClick={() =>
              setState((prev) => ({ ...prev, showModal: MODAL.archiveOne }))
            }
          >
            <FiArchive color={colors.main[900]} size={SIZE} />
            <Card.Text>
              {active === ACTIVE_TYPE.all ? "Archive" : "Retrieve"} call
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
};
