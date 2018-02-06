import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';


Enzyme.configure({adapter: new Adapter()});

import Matchmaking from '../components/matchmaking';

describe('Matchmaking', () => {
  test('Testing that the initial matchmaking state sets searching : true', () => {
    let mountedMatchmakingForm = Enzyme.mount(<Matchmaking/>);

    expect(mountedMatchmakingForm.state()).toEqual({searching:true, socket: null});
  });
});
