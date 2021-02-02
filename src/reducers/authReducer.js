const initialState = {
    user: null,
    errorMsg: "",
    loading:false,
    loggedIn:false,
    token:null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH_LOGIN_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: "",
            };
        case "AUTH_LOGIN_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "giriş işlemi başarı degil. fail",
            };
        case "AUTH_LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                user: action.payload,
                errorMsg: "",
                loggedIn:true,
                token:action.payload.data.token

            };
        default:
            return state
    }
};
export default loginReducer;
