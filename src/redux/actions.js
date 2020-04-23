import { DECREMENT, INCREMENT } from "./types";

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const  decrement = () => {
    return {
        type: DECREMENT
    }
}

export const asyncIncrement = () => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(increment());
        }, 1500);
    }
    /*return {
        type: ASYNC_INCREMENT
    }*/
}
