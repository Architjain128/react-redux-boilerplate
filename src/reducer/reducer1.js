import * as actions from '../action';

const initialState = {
    counter: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case actions.RESET:
            return {
                ...state,
                counter: 0,
            }
        default:
            return state;
    }
}

export default counterReducer;