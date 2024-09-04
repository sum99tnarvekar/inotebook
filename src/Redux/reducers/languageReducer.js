import { toggle_marathi , toggle_english , toggle_hindi } from '../actionTypes';

const initialState = {
    langMode: "en",
};

const languageReducer = (state = initialState, action) => {
    switch(action.type) {
        case toggle_english:
            return {
                ...state, langMode: "en",
            };
        case toggle_marathi:
            return {
                ...state, langMode: "mr",
            };
        case toggle_hindi:
            return {
                ...state, langMode: "hi",
            };
        default:
            return state;
    }
}

export default languageReducer;