import * as actions from '../action';
import {takeEvery, put} from 'redux-saga/effects';

// whats call about?
export function* actionCounterSaga() {
    yield put({ type: actions.ACTION_COUNT })
}

export function* watcherActionCounterSaga() {
    yield takeEvery(actions.DECREMENT, actionCounterSaga);
    yield takeEvery(actions.INCREMENT, actionCounterSaga);
    yield takeEvery(actions.RESET, actionCounterSaga);
}

