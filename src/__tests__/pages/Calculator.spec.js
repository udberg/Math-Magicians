import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../../components/Calculator';

test('should correctly render Calculator page', () => {
  const component = renderer.create(<Calculator />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
