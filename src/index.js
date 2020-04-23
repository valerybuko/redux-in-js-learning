import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import './styles.css';
import {rootReducer} from "./redux/rootReducer";
import { DECREMENT, INCREMENT } from "./redux/types";
import {asyncIncrement, decrement, increment} from "./redux/actions";

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

function logger(state) {
    return function (next) {
        return function (action) {
            console.log('Previous state: ', state.getState());
            console.log('Action: ', action);
            const newState = next(action);
            console.log('New state', state.getState());
            return (newState);
        }
    }
}

let store = createStore(
    rootReducer,
    0,
    applyMiddleware(thunk, logger)
);

window.store = store;

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state;
});

store.dispatch( {  type: "INIT_APPLICATION" } )

themeBtn.addEventListener('click', () => {
   // document.body.classList.toggle('dark');
});


