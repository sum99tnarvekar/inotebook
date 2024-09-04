import { toggle_marathi , toggle_english , toggle_hindi } from '../actionTypes';

export const toggleMarathiLanguage = () => ({
    type: toggle_marathi,
});

export const toggleEnglishLanguage = () => ({
    type: toggle_english,
});

export const toggleHindiLanguage = () => ({
    type: toggle_hindi,
});
