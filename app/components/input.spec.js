import React from 'react';
import Input from './input';

describe('Input', () => {
  const wrapper = shallow(
    <Input type="password" label="Password" name="password" />,
  );
  const label = wrapper.find('label');
  const input = wrapper.find('input');

  it('should render label', () => {
    expect(label.text()).toEqual('Password');
  });

  it('should render Input type password', () => {
    expect(input.prop('type')).toEqual('password');
  });

  it('should render Input name', () => {
    expect(input.prop('name')).toEqual('password');
  });
});
