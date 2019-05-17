import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  it('renders Quote', () => {
    const quote = {
      character: 'Fry',
      quote: 'What??',
      image: '/image'
    };
    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
