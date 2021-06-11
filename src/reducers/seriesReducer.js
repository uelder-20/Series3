//import seriesMock from '../pages/Series.json';

import { SET_SERIES } from '../actions';

export default function(state = null, action){
    switch (action.type){
        case SET_SERIES:
            return action.series;

            default:
                return state;
    }
return state;
}