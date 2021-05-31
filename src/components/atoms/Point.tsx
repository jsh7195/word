import React from "react";

interface props {
  point: number;
}

const Point = (props: props):JSX.Element => {
  const { point } = props;
  return <span>점수 : {point ? point : 0} 점</span>;
};

export default Point;
