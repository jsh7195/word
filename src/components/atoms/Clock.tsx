import React, { useEffect, useState } from "react";

interface props {
  limit: number;
  index: number;
  text: string;
}

const Clock = (props: props) => {
  const { limit, text } = props;
  const [ time , setTime ] = useState<number>(0);

  //동일한 제한시간을 가진데이터가 존재해서 index를 붙임
  useEffect(() => {
    setTime(props.limit);
  }, [(props.index+props.limit)])

  useEffect(() => {
    
    const timer = setTimeout(()=>{ setTime(time-1) },1000);

    if(time >= -1){
      
    } else {
      clearTimeout(timer);
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, [text,time]);

  return (
    <div>
      <span id="timer">{time} </span> / {limit}
    </div>
  );
};

export default Clock;
