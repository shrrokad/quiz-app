// import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import * as actions from '../api'

const api = ({ dispatch }) => (next) => async (action) => {
    // console.log(action);



    const {
        url,
        method,
        data,
        onStart,
        onSuccess,
        onError,
        isHttpsAction } = action;

    if (!isHttpsAction) return next(action);

    console.log({action});

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
        const response = await axios.request({
            baseURL: "http://localhost:3005",
            url,
            method,
            data,
        });
        // General

        dispatch(actions.apiCallSuccess(response.data));
        // Specific
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
    } catch (error) {
        // General
        dispatch(actions.apiCallFailed(error.message));

        // Specific
        if (onError) dispatch({ type: onError, payload: error.message })
    }

}

export default api;