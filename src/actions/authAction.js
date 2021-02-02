import axios from "axios";

export const loginAction = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "AUTH_LOGIN_LOADING"
            });
            const res = await axios.post(`http://127.0.0.1:8000/api/login`, {email: email, password: password});
            dispatch({
                type: "AUTH_LOGIN_SUCCESS",
                payload: res.data
            })
        } catch (e) {
            dispatch({
                type: "AUTH_LOGIN_FAIL",
            })
        }
    }

    // return await dispatch({type: 'AUTH_LOGIN', payload: user})
};
