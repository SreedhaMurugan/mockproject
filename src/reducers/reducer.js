import *as actiontypes from "../actions/actiontypes"

const instialState = {
    details:{},
    isError:false
}



const reducer = ( state = {instialState}, action={}) => {

    const newState = {...state}

    switch(action.type){
        case actiontypes.USER_DETAILS:
            return {...newState};
        case actiontypes.USER_DETAILS_SUCCESS:
            return {...newState, details : {...action.payload}};
         case actiontypes.USER_DETAILS_ERROR:
                return {...newState, details : {...newState.details},isError:true};
        case actiontypes.DELETE_DETAILS:
            return {...newState,details:{data:[...newState?.details?.data.filter(post=>(post.id!==action.payload?.detailid))]}}
            case actiontypes.EDIT_DETAILS:
                return{
                    ...newState,details:{data:[...newState?.details?.data.map(item=>
                        item.id==action.payload?.id
                        ?{...item,
                        title:action.payload?.title,
                        body:action.payload?.body
                        }
                        :item
                        )]}
                }
                case actiontypes.POST_DETAILS:
                    if(action.payload){
                  return {...newState,details:{data:[...newState?.details?.data.concat({...action.payload})]}}

                    }
                    

        default:
            return{...newState};

    }

}

export default reducer
