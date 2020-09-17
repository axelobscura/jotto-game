import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccesfulGuess = 'train';
    const succesfulGuess = 'party';
    describe('no guessed words', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('updates states correctly for unsuccesful guess', () => {
            store.dispatch(guessWord(unsuccesfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessWord: unsuccesfulGuess,
                    letterMatchCount: 3
                }]
            };
            expect(newState).toEqual(expectedState);
        });
        test('updates states correctly for succesful guess', () => {
            store.dispatch(guessWord(succesfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessWord: succesfulGuess,
                    letterMatchCount: 5
                }]
            };
            expect(newState).toEqual(expectedState);
        })
    });
    describe('some guessed words', () => {
        const guessedWords = [{guessedWord: 'agile', letterMatchCount: 1}];
        const initialState = { guessedWord, secretWord};
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('updates state correctly for unsuccesful guess', () => {
            store.dispatch(guessWord(unsuccesfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, { guessedWord: unsuccesfulGuess, letterMatchCount: 3 }]
            };
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for succesful guess', () => {
            store.dispatch(guessWord(succesfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, { guessedWord: succesfulGuess, letterMatchCount: 5 }]
            };
            expect(newState).toEqual(expectedState);
        })
    });
});