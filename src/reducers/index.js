import {combineReducers} from 'redux';
import userReducer from './userReducer';
import serieFormReducer from './SerieFormReducer';
import seriesReducer from './seriesReducer';


export default combineReducers({
    user: userReducer,
    serieForm: serieFormReducer,
    series: seriesReducer,
});