import React, { useEffect, useState } from "react";
import { ClockType } from '@lib/data';
import { ClockStyle } from '@atoms/style';

const Clock = (props: ClockType):JSX.Element => {
  const { limit, text } = props;
  const [ time , setTime ] = useState<number>(0);

  //동일한 제한시간을 가진데이터가 존재해서 index를 붙임
  useEffect(() => {
    setTime(props.limit);
  }, [(props.index+props.limit)])

  useEffect(() => {
    
    const timer = setTimeout(()=>{ setTime(time-1) },1000);
    if( time<-1 ) clearTimeout(timer);
    return () => {
      clearTimeout(timer);
    };
  }, [text,time]);

  return (
    <ClockStyle>
      <span id="timer">남은 시간: {time} </span> / {limit}
    </ClockStyle>
  );
};

export default Clock;
