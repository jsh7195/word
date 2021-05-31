import React from "react";
import { Link } from "react-router-dom";
interface props {
  text: string;
  url: string;
  onClick?: any;
}

const Button = (props: props) => {
  const { text, onClick, url } = props;

  return (
    <button onClick={onClick}>
      <Link to={url}>{text}</Link>
    </button>
  );
};

export default Button;
