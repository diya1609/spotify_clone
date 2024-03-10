import { combineReducers } from 'redux';
import appReducer from './Slices/SpotifySlice'

const rootReducer = combineReducers({
    app: appReducer,
    
});

export default rootReducer;
