import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import addDict from "./modules/addDict";
import thunk from 'redux-thunk';

const midddlewares = [thunk];
const rootReducer = combineReducers({addDict});
const enhancer = applyMiddleware(...midddlewares)
const store = createStore(rootReducer, enhancer);

export default store;