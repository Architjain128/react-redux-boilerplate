import { createStore,applyMiddleware,combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../reducer/reducer1";
import actionCounterReducer from "../reducer/reducer2";
import rootSaga from "../saga/saga";

const rootReducer = combineReducers({
    counterReducer,
    actionCounterReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;