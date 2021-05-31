import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { meanBy , filter} from 'lodash';
import { WordsItem } from "@lib/data";
import Button from "@atoms/Button";
import Point from '@atoms/Point';

const End = () => {
  const location = useLocation();
  const [ point, setPoint ] = useState(0);
  const [ avrTime, setAvrTime ] = useState(0);

  useEffect(() => {
    if (location.state) {
      const { params, point }: any = location.state;
      setPoint(point);
      
      // 성공 평균시간 
      // 계산범위는 정수이므로 소요시간이 0.xx초인 문제는 올림해서 1초로 계산한다.
      const successList = filter(params,(item:WordsItem)=>{
        return item.success;
      })
      //평균 소수점 2자리 반올림
      const avg = meanBy(successList, (item:WordsItem) => {
        if(item.success){
          return item.spend === 0 ? 1 : item.spend;
        }
      }).toFixed(2);
      setAvrTime(Number(avg));

    }
  }, [location.state]);

  return (
    <div>
      <div>결과화면</div>
      <span>평균 소요시간 : </span>{avrTime} <br/>
      <Point point={point}/> <br/>
      <Button text="다시시작" url="/Intro" />
    </div>
  );
};

export default End;
