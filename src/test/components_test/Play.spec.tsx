import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Play from "@template/Page/Play";

Enzyme.configure({ adapter: new Adapter() });

test("Play Render Test ... <Play/>", () => {
  const sampleWord = {text:'test', second:5};
  sessionStorage.setItem('words',JSON.stringify([sampleWord]));

  const component = renderer
    .create(
      <BrowserRouter>
        <Play />
      </BrowserRouter>
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
