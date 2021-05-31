import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Clock from "@atoms/Clock";
import Point from "@atoms/Point";
import Button from "@atoms/Button";
import { cloneDeep } from "lodash";
import { WordsItem } from '@lib/data';

const Play = () => {
  const history = useHistory();
  const inputFocus = useRef<HTMLInputElement>(null);

  //let processWords;
  const [words, setWords] = useState<WordsItem[]>([]); // 전체단어
  const [wordsClone, setWordsClone] = useState<WordsItem[]>([]); // 전체단어
  const [userInputText, setUserInputText] = useState(""); // 사용자 입력단어
  const [text, setText] = useState(""); // 단어
  const [time, setTime] = useState(0); // 시간
  const [index, setIndex] = useState(0);
  const [spend, setSpend] = useState(0);
  const [point, setPoint] = useState(0);

  useEffect(() => {
    if(inputFocus.current) inputFocus.current.focus();
    let getWords = sessionStorage.getItem("words");
    if (getWords) {
      const parseWords = JSON.parse(getWords);
      setWords(parseWords);
      setPoint(parseWords.length)
      setWordsClone(cloneDeep(parseWords));

    } else {
      alert("문제 목록이 존재하지 않습니다.");
      history.push("/Intro");
    }
  }, []);

  // init
  useEffect(() => {
    if (words.length > 0 && words.length > index) {
      let countdown = 0;
      const item = words[index];
      const { second, text } = item;
      setTime(second);
      setText(text);
      setSpend(0);

      //소요시간
      const spendTime = setInterval(() => {
        countdown += 1;
        setSpend(countdown);
       
      }, 1000);

      //시간제한 - 다음문제
      const processWords = setTimeout(() => {
        let cloenArray = cloneDeep(wordsClone);
        cloenArray[index].spend = second;
        cloenArray[index].success = false;
        setWordsClone(cloenArray);
        setPoint(point-1);
        setIndex(index + 1);
      }, second * 1000);

      return () => {
        clearTimeout(processWords);
        clearInterval(spendTime);
      };
    } else if (words.length > 0 && words.length === index) {
      history.push("/End", { params: wordsClone, point });
    }
  }, [words, index]);

  //엔터, 정답 검사
  const inputEnterHandler = (e: any) => {
    if (e.key === "Enter") {
      const validResult = userInputText === text;
      if (validResult) {
        let cloenArray = cloneDeep(wordsClone);
        cloenArray[index].spend = spend;
        cloenArray[index].success = validResult;
        setWordsClone(cloenArray);
        setIndex(index + 1); // 다음문제
      }
      setUserInputText("");
    }
  };

  // 유저 입력 시
  const onChangeHandler = (e: any) => {
    setUserInputText(e.target.value);
  };

  return words && words.length > 0 ? (
    <div>
      <div>
        <Clock limit={time} index={index} text={text} /> <Point point={point}/>
      </div>
      <div>
        <h5>문제 단어</h5>
        <h1>{text}</h1>
      </div>
      <div>
        <h5>
          <input
            value={userInputText}
            onChange={onChangeHandler}
            onKeyPress={inputEnterHandler}
            ref={inputFocus}
          />
        </h5>
      </div>
      <div>
        <Button
          text="초기화"
          url="/Intro"
          // onClick={() => history.replace("/Intro")}
        />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Play;
