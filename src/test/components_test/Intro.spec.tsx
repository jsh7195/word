import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Intro from "@template/Page/Intro";

Enzyme.configure({ adapter: new Adapter() });

test("Intro Render Test ... <Intro/>", () => {
  const component = renderer
    .create(
      <BrowserRouter>
        <Intro />
      </BrowserRouter>
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
