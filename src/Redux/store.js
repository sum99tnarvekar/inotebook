import { createStore, combineReducers } from 'redux';
import themeReducer from '../Redux/reducers/themeReducer';
import languageReducer from '../Redux/reducers/languageReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    language: languageReducer,
});

const store = createStore(rootReducer);

export default store;
