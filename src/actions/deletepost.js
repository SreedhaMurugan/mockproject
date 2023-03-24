import *as actiontypes from "./actiontypes"


function deletePost(detailid) {
    return (
        { type:actiontypes.DELETE_DETAILS, payload:detailid,});
   
}
export default deletePost;