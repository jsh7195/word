import React from "react";
import {PointType} from '@lib/data';

const Point = (props: PointType):JSX.Element => {
  const { point } = props;
  return <span>점수 : {point ? point : 0} 점</span>;
};

export default Point;
