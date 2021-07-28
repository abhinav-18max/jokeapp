import{DARCULA,APPLE, BASIC} from './themes/';
import THEMES from "./constants/theme";

export const getTheme = themeName => {
    switch(themeName){
        case THEMES.DARCULA: return DARCULA;
        case THEMES.APPLE: return APPLE;
        default: return BASIC
    }
};