import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import Counter from "./components/Counter";
import reducer from './reducers/reducers';

const store = createStore(reducer);
const action = type => store.dispatch({type});

function render() {
    ReactDOM.render(
        <Counter 
            value={store.getState()}
            onIncrement={() => action('INCREMENT')}
            onDecrement={() => action('DECREMENT')}
            onIncrementAsync={() => action('INCREMENT_ASYNC')}
        />, document.getElementById('root')
    );
}

render();
store.subscribe(render);