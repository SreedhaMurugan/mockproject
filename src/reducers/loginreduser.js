import *as actiontypes from "../actions/actiontypes";
import React from 'react';

const instialState = {
    user:{},
    isError:false
}



 const loginreduser = (state = {instialState}, action={}) => {
  
    const newstate = {...state}

    switch(action.type){
        case actiontypes.GET_THE_USER:
            return{...newstate, user : {...action.payload}};
        default:
            return {...newstate};
    }
}


export default loginreduser;
