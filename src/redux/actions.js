import { ASYNC_INCREMENT, DECREMENT, INCREMENT } from "./types";

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
    return {
        type: ASYNC_INCREMENT
    }
}
