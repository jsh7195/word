import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from 'react-test-renderer';
import Clock from "@atoms/Clock";

Enzyme.configure({ adapter: new Adapter() });

test("Clock Render Test ... <Clock/>", () => {
  const props = {
    limit: 9,
    text: "test",
    index: 1,
  };
  const component = renderer.create(<Clock {...props} />).toJSON();
  expect(component).toMatchSnapshot();
});
