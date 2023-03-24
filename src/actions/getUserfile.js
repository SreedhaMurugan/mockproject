import axios from "axios"

import *as actiontypes from "./actiontypes"

const request = axios.create({
    headers:{
        
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        
    },
});

const getUser= (email)=>{
    
    return(dispatch)=>{
        dispatch({
            type:actiontypes.GET_THE_USER
        });

        request({
            method:"get",
            url:`https://jsonplaceholder.typicode.com/users/6`
        })

        .then((response)=>{
            
            if(email==response?.data?.email){

                dispatch({
                    type:actiontypes.GET_THE_USER,
                    payload: response
                });
            }
            
           
        })

    }
}

export default getUser;