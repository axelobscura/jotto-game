import moxios from 'moxios';

import { storeFactory } from '../test/testUtils';
import { getSecretWord } from './';

describe('secretWord action creator', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });
    test('adds response word to state', () => {
        const secretWord = "party";
        
    });
})