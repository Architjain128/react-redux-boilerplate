import {all} from 'redux-saga/effects';
import {watcherActionCounterSaga} from './saga1';

function* rootSaga() {
    yield all([
        watcherActionCounterSaga(),
    ]);
}

export default rootSaga;