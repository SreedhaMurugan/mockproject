import axios from "axios"

import *as actiontypes from "./actiontypes"

const request = axios.create({
    headers:{
        
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        
    },
});


const getUserDetail = ()=>{
    
    return(dispatch)=>{
        dispatch({
            type:actiontypes.USER_DETAILS
        });

        request({
            method: 'get',
            url:`https://jsonplaceholder.typicode.com/posts?userId=6`,
            
        })

        .then((response)=>{
             console.log(response,"res")  
            dispatch({
                type:actiontypes.USER_DETAILS_SUCCESS,
                payload: response
            });
           })
    
           .catch((error)=>{
            dispatch({
                type:actiontypes.USER_DETAILS_ERROR,
                payload: error
            });
           })

    }
}

export default getUserDetail;

