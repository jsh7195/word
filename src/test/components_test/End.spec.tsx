import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import End from "@template/Page/End";

Enzyme.configure({ adapter: new Adapter() });

test("End Render Test ... <End/>", () => {
  const component = renderer
    .create(
      <BrowserRouter>
        <End />
      </BrowserRouter>
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
