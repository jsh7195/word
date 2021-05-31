import React from "react";
import { Link } from "react-router-dom";
interface props {
  text: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
}

const Button = (props: props):JSX.Element => {
  const { text, onClick, url } = props;

  return (
    <button onClick={onClick}>
      <Link to={url}>{text}</Link>
    </button>
  );
};

export default Button;
