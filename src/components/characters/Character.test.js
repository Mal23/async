import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const character = {
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      image: './image'
    };
    const wrapper = shallow(<Character character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
