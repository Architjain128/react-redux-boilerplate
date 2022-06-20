import * as actions from '../action';

export const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter,
        actionCounter: state.actionCounterReducer.actionCounter,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (data) => dispatch({type:actions.INCREMENT, data}),
        onDecrement: (data) => dispatch({type:actions.DECREMENT, data}),
        onReset: (data) => dispatch({type:actions.RESET, data}), 
        onActionCount: (data) => dispatch({type:actions.ACTION_COUNT, data}),
    }
}