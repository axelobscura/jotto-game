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
    Text('adds response word to state', () => {

    });
})