import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Point from '../../components/atoms/Point';

Enzyme.configure({ adapter: new Adapter() });
 
test('Point Render Test ... <Point/>', () => {
  const props = {
    point: 5
  } 
  const component = renderer.create(<Point {...props}/>).toJSON();
  expect(component).toMatchSnapshot();
});