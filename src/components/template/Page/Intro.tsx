import React from "react";
import useFetch from "@hooks/useFetch";
import Clock from "@atoms/Clock";
import Point from "@atoms/Point";
import Button from "@atoms/Button";
import { WordsItem } from "@lib/data";

const Intro = () => {
  const [data, loading] = useFetch("/get-words");
  sessionStorage.setItem("words", JSON.stringify(data));

  return (
    <div>
      <div>
        <h5>문제 단어</h5>
      </div>
      <div>{loading ? "Loading..." : <Button text="시작" url="/Play" />}</div>
    </div>
  );
};

export default Intro;
