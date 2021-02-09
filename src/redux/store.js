import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import pizzasReducer from "./reducers/pizzasReducer";
import filtersReducer from "./reducers/filtersReducer";
import cartReducer from "./reducers/cartReducer";
import thunkMiddleware from "redux-thunk";
const rootReducer=combineReducers({
    pizzasReducer,
    filtersReducer,
    cartReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store