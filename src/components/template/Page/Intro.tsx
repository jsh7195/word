import React from 'react';
import useFetch from "@hooks/useFetch";
import Button from "@atoms/Button";

const Intro = () => {
  const [data, loading] = useFetch("/get-words");
  sessionStorage.setItem("words", JSON.stringify(data));

  return (
    <div>
      <div>
        <h2>문제 단어 나오는곳</h2>
      </div>
      <div>{loading ? "Loading..." : <Button text="시작" url="/Play" />}</div>
    </div>
  );
};

export default Intro;
