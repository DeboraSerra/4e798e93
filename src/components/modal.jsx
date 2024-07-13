import PropTypes from "prop-types";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { LuDelete } from "react-icons/lu";
import { MdVoicemail } from "react-icons/md";
import colors from "../utils/colors";

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
      setValue={setValue}
    />
  );
};

const NumberBoard = ({ className }) => {
  return (
    <div className={`modal__board ${className ?? ""}`}>
      <div className='modal__board--row'>
        <p className='modal__board--num'>
          1
          <small>
            <MdVoicemail color={color} size={size} />
          </small>
        </p>
        <p className='modal__board--num'>
          2<small>ABC</small>
        </p>
        <p className='modal__board--num'>
          3<small>DEF</small>
        </p>
      </div>
      <div className='modal__board--row'>
        <p className='modal__board--num'>
          4<small>GHI</small>
        </p>
        <p className='modal__board--num'>
          5<small>JKL</small>
        </p>
        <p className='modal__board--num'>
          6<small>MNO</small>
        </p>
      </div>
      <div className='modal__board--row'>
        <p className='modal__board--num'>
          7<small>PQRS</small>
        </p>
        <p className='modal__board--num'>
          8<small>TUV</small>
        </p>
        <p className='modal__board--num'>
          9<small>WXYZ</small>
        </p>
      </div>
      <div className='modal__board--row'>
        <p className='modal__board--num'>*</p>
        <p className='modal__board--num'>
          0<small>+</small>
        </p>
        <p className='modal__board--num'>#</p>
      </div>
      <div className='modal__board--row'>
        <p className='modal__board--call'>
          <FiPhone color={color} size={size} />
          Call
        </p>
        <p className='modal__board--clear'>
          <LuDelete color={color} size={size} />
          Clear
        </p>
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
  variant: PropTypes.oneOf(["primary", "secondary"]),
  className: PropTypes.string,
};

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Field.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
};

NumberBoard.propTypes = {
  className: PropTypes.string,
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
