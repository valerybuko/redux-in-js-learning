import { createStore } from "redux";
import './styles.css';
import {rootReducer} from "./redux/rootReducer";
import { DECREMENT, INCREMENT } from "./redux/types";

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

let store = createStore(rootReducer, 0);

window.store = store;

addBtn.addEventListener('click', () => {
    store.dispatch({ type: INCREMENT });
});

subBtn.addEventListener('click', () => {
    store.dispatch( { type: DECREMENT } );
});

asyncBtn.addEventListener('click', () => {

});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state;
});

store.dispatch( {  type: "INIT_APPLICATION" } )

themeBtn.addEventListener('click', () => {
   // document.body.classList.toggle('dark');
});


