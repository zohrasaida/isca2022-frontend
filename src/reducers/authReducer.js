import {
    CONNECT_SUCCESS,
    LOGOUT_SUCCESS
} from "../actions/types";
import jwt_decode from "jwt-decode";


const initialState = {
    access_token :  localStorage.getItem('access_token')
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CONNECT_SUCCESS:
            localStorage.setItem("access_token", action.payload.access_token);
            const payload = jwt_decode(action.payload.access_token);
            return {
                ...state,
                access_token : action.payload.access_token
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem("acces_token");
            return {
                ...state,
                access_token : null
            };
        default:
            return state;
    }
}