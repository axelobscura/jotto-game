import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD'
};

export const guessWord = (guessedWord) => {
    return function(dispatch, getState){
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessWord, secretWord);

        dispatch({
            
        })
    };
}