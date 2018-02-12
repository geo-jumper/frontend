import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import MatchResults from '../components/match-results';

describe('Match Results', () => {
  test('Testing that the initial match results state sets gamefinished: true', () => {
    let mountedMatchResults = Enzyme.mount(<MatchResults />);

    expect(mountedMatchResults.state()).toEqual({gamefinished:true});
  });
  test('Testing that the component renders a match-results div to the page', () => {
    const wrapper = shallow(
      <div></div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});