import useFetch from "@hooks/useFetch";
import Button from "@atoms/Button";

const Intro = ():JSX.Element => {
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
