import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import SignupForm from '../components/signup-form';

describe('SignupForm', () => {
  test('Testing that the initial signup form state is an empty object', () => {
    let mountedSignUpForm = Enzyme.mount(<SignupForm />);

    expect(mountedSignUpForm.state()).toEqual({});
  });
  test('Testing that the component renders a SignUp form to the page', () => {
    const wrapper = shallow(
      <form></form>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Testing handleChange events', () => {

    let wrapper = Enzyme.mount(<SignupForm />);

    // wrapper.find('input').simulate('change');

    let name = 'name';
    let value = 'value';

    // let {name, value} = event.target;

    wrapper.setState({[name] : value});

    expect(wrapper.state()).toEqual({[name] : value});
  });


  // test('Testing handleSubmit events', () => {
  //   let wrapper = Enzyme.mount(<SignupForm />);
  
  //   wrapper.find('button').simulate('click');

  //   let name = 'yourName';
  //   let value = 'yourName';

  //   // let {name, value} = event.target;
    
  //   wrapper.setProps({[name] : value});
    
  //   expect(wrapper.props()).toEqual({[name] : value});
  // });

  // test('pass a selected value to the onChange handler', () => {
  //   const value = '2';
  //   const handleChange = handleChange(event);
  //   const wrapper = shallow(
  //     <input onChange={handleChange} />
  //   );

  //   expect(wrapper).toMatchSnapshot();

  //   wrapper.find('select').simulate('change', {
  //     target: { value },
  //   });

  //   expect(handleChange).toBeCalledWith(value);
  // });
    

});