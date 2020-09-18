import { actionTypes } from '../actions';

export default (state=[], action) => {
    switch(action.type){
        case action.type.GUESS_WORD:
            return [...state, action.payload]
        default:
            return state;
    }
}