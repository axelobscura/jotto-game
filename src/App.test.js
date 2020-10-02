import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App, { UnonnectedApp } from './App';

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
};

describe('redux properties', () => {
  test('has access to success state', () => {
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has access to secret word state', () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to guessewords state', () => {
    const guessewords = [{guesseWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessewords });
    const guesseWordsProp = wrapper.instance().props.guesseWords;
    expect(guesseWordsProp).toEqual(guessewords);
  });
  test('getSecretWord action creator is a function on the props', () => {
    
  })
})