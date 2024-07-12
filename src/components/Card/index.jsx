import PropTypes from "prop-types";
import React from "react";

const Card = ({ children, className }) => {
  return <div className={`card ${className ?? ""}`}>{children}</div>;
};

const Content = ({ children, className, onClick }) => {
  return (
    <div
      className={`card__content ${className ?? ""}`}
      onClick={onClick ?? undefined}
    >
      {children}
    </div>
  );
};

const Text = ({ children, className }) => {
  return <p className={`card__text ${className ?? ""}`}>{children}</p>;
};

const Body = ({ children, className }) => {
  return <div className={`card__body ${className ?? ""}`}>{children}</div>;
};

const Button = ({ children, className }) => {
  return <button className={`card__btn ${className ?? ""}`}>{children}</button>;
};

Card.Content = Content;
Card.Button = Button;
Card.Text = Text;
Card.Body = Body;

export default Card;

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
