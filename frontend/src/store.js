import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import data from './data';


//creating redux store 
const initialState = {};
const reducer = (state, action) => {
    return { products: data.products };
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
