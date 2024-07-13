import PropTypes from "prop-types";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { LuDelete } from "react-icons/lu";
import { MdVoicemail } from "react-icons/md";
import colors from "../../utils/colors";
import { maskPhone } from "../../utils/maskPhone";

const size = 28;
const color = colors.main[900];

const classNameByVariant = {
  primary: "alert",
  secondary: "drawer",
};

const Modal = ({ children, variant = "primary", className }) => {
  return (
    <div className={`${className ?? ""} ${classNameByVariant[variant]} modal`}>
      {children}
    </div>
  );
};

const Content = ({ children, className }) => {
  return <div className={`modal__content ${className ?? ""}`}>{children}</div>;
};

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`modal__btn ${className ?? ""}`}
      onClick={onClick ?? null}
    >
      {children}
    </button>
  );
};

const Field = ({ setValue, value = "", className }) => {
  return (
    <input
      type='text'
      className={`modal__field ${className ?? ""}`}
      value={value}
      onChange={({ target }) => setValue(maskPhone(target.value))}
    />
  );
};

const NumberButton = ({ value, btmContent, onClick }) => {
  return (
    <button
      className='modal__board--num'
      onClick={() => onClick(value)}
      onKeyDown={(e) => {
        if (e.key === value) {
          onClick(e.key);
        }
      }}
    >
      {value}
      {!!btmContent ? btmContent : null}
    </button>
  );
};

const NumberBoard = ({ className, onClick, onCallClick, onClear }) => {
  return (
    <div className={`modal__board ${className ?? ""}`}>
      <div className='modal__board--row'>
        <NumberButton
          onClick={onClick}
          btmContent={
            <small>
              <MdVoicemail color={color} size={14} />
            </small>
          }
          value='1'
        />
        <NumberButton
          onClick={onClick}
          btmContent={<small>ABC</small>}
          value='2'
        />
        <NumberButton
          onClick={onClick}
          btmContent={<small>DEF</small>}
          value='3'
        />
      </div>
      <div className='modal__board--row'>
        <NumberButton
          onClick={onClick}
          btmContent={<small>GHI</small>}
          value='4'
        />
        <NumberButton
          onClick={onClick}
          btmContent={<small>JKL</small>}
          value='5'
        />
        <NumberButton
          onClick={onClick}
          btmContent={<small>MNO</small>}
          value='6'
        />
      </div>
      <div className='modal__board--row'>
        <NumberButton
          onClick={onClick}
          btmContent={<small>PQRS</small>}
          value='7'
        />
        <NumberButton
          onClick={onClick}
          btmContent={<small>TUV</small>}
          value='8'
        />
        <NumberButton
          onClick={onClick}
          btmContent={<small>WXYZ</small>}
          value='9'
        />
      </div>
      <div className='modal__board--row'>
        <NumberButton onClick={onClick} value='*' />
        <NumberButton
          onClick={onClick}
          btmContent={<small>+</small>}
          value='0'
        />
        <NumberButton onClick={onClick} value='#' />
      </div>
      <div className='modal__board--row'>
        <button className='modal__board--btn clear' onClick={onClear}>
          <LuDelete color={color} size={size} />
          <span>Clear</span>
        </button>
        <button className='modal__board--btn call' onClick={onCallClick}>
          <FiPhone color={colors.main[100]} size={size} />
          <span>Call</span>
        </button>
      </div>
    </div>
  );
};

Modal.Content = Content;
Modal.Field = Field;
Modal.NumberBoard = NumberBoard;
Modal.Button = Button;

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(classNameByVariant)),
  className: PropTypes.string,
};

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Field.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};

NumberButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  btmContent: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

NumberBoard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onCallClick: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
