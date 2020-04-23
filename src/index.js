import { createStore } from "./createStore";
import './styles.css';
import {rootReducer} from "./redux/rootReducer";

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

let store = createStore(rootReducer, 0);

window.store = store;

addBtn.addEventListener('click', () => {

});

subBtn.addEventListener('click', () => {

});

asyncBtn.addEventListener('click', () => {

});

themeBtn.addEventListener('click', () => {
   // document.body.classList.toggle('dark');
});


