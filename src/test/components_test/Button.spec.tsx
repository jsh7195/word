import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Button from "@atoms/Button";

Enzyme.configure({ adapter: new Adapter() });

test("Button Render Test ... <Button/>", () => {
  const props = {
    text: "Button junit test",
    url: "/Intro",
  };
  const component = renderer
    .create(
      <BrowserRouter>
        <Button {...props} />
      </BrowserRouter>
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
