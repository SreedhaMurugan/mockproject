
import axios from "axios"

import *as actiontypes from "./actiontypes"

const request = axios.create({
    headers:{
        
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        
    },
});

const addpost = (postedata)=>{
  //console.log(postedata,'this is for add acti')
  
    return(dispatch)=>{

        dispatch({
            type:actiontypes.POST_DETAILS
        });
    {fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify({
        
          title: postedata.postetitle,
          body: postedata.postebody,
              
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) =>  dispatch({
            type: actiontypes.POST_DETAILS,
            payload: json,
        }))}
        
    }

    
    }

export default addpost