import * as actions from '../action';

const initialState = {
    actionCounter: 0,
}

const actionCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ACTION_COUNT:
            return {
                ...state,
                actionCounter: state.actionCounter + 1,
            }
        default:
            return state;
    }
}

export default actionCounterReducer;