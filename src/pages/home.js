import React from "react";
import { connect } from "react-redux";
import {mapStateToProps, mapDispatchToProps} from '../mapper/propsMapper';


function Home(props) {
    return (
        <div>
        <h1>Home</h1>
        <div>
            <p>
                <strong>Counter:</strong> {props.counter}
            </p>
            <button onClick={() => props.onIncrement()}>Increment</button>
            <button onClick={() => props.onDecrement()}>Decrement</button>
            <button onClick={() => props.onReset()}>Reset</button>
        </div>
        <p>
            <strong>Action Counter:</strong> {props.actionCounter}
        </p>
        </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);