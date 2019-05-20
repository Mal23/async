import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes component', () => {
  it('renders Quotes', () => {
    const quotes = [
      {
        character: 'Fry',
        quote: 'What??',
        image: '/image'
      },
      {
        character: 'Fry',
        quote: 'Huh??',
        image: '/image'
      }
    ];
    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
