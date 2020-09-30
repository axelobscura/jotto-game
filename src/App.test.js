import React from 'react';
import { shallow } from 'enzyme';

describe('redux properties', () => {
  test('has access to success state', () => {
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
})