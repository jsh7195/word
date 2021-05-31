import React, { useEffect } from "react";

interface props {
  point: number;
}

const Point = (props: props) => {
  const { point } = props;

  useEffect(() => {
  }, [point])

  return <span>점수 : {point ? point : 0} 점</span>;
};

export default Point;
