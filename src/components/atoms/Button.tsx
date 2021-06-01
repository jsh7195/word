import React from "react";
import { Link } from "react-router-dom";
import { ButtonType } from "@lib/data";
import { ButtonStyle } from "./style";

const Button = (props: ButtonType): JSX.Element => {
  const { text, onClick, url } = props;

  return (
    <Link to={url}>
      <ButtonStyle onClick={onClick}>{text}</ButtonStyle>
    </Link>
  );
};

export default Button;
