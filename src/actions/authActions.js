import {
    CONNECT_SUCCESS,
    LOGOUT_SUCCESS,
    CONNECT_FAIL
  } from "../actions/types";
  
  import api from "../helpers/api";
  

//login admin
export const login = (c) => 
(dispatch) => {
    const config = {
        headers: {
            "Content-Type" : "application/json",
        },
    };
    const body = JSON.stringify(c);
    console.log(body)

    api.post("/login", body, config)
    .then((res)=> {
        dispatch({
            type : CONNECT_SUCCESS,
            payload: {
                'access_token' : res.data.login_token,
            },
        });
    }).catch((err) => {
        console.log("you've got an issue");
    });
};



//session closed
export const logout = ()=>
(dispatch) =>
{
    api.post("/logout")
    .then (()=> {
        dispatch({
            type : LOGOUT_SUCCESS
        });
    }).catch((err) => {
        console.log ("log out issue");
    });
};