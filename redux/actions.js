import { actionTypes } from "./actionTypes";

export function failure(error) {
    return {
        type: actionTypes.FAILURE,
        error
    };
}

// export function increment() {
//     return { type: actionTypes.INCREMENT };
// }

// dispatch模式
export function increment() {
    return dispatch => {
        dispatch({ type: actionTypes.INCREMENT })
    };
}

export function decrement() {
    return { type: actionTypes.DECREMENT };
}

export function reset() {
    return { type: actionTypes.RESET };
}

export function loadData() {
    return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(data) {
    return {
        type: actionTypes.LOAD_DATA_SUCCESS,
        data
    };
}

export function startClock() {
    return { type: actionTypes.START_CLOCK };
}

export function tickClock(isServer) {
    return {
        type: actionTypes.TICK_CLOCK,
        light: !isServer,
        ts: Date.now()
    };
}
