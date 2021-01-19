import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../utils';
const initialState={
    events:[],
    loading:false,
}

const uploadImageStart = ( state, action ) => {
    console.log("IT HAS STARTEDDD");
    return updateObject( state, { loading:true } );
};

const uploadImageSuccess = ( state, action ) => {
    console.log('ACTIONNN',action.events);
    return updateObject( state, {
        events:action.events,
        loading: false
    } );
   
};

const uploadImageFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer =(state = initialState, action )=>{
    switch(action.type){
        case actionTypes.UPLOAD_IMAGE_START: return uploadImageStart( state, action );
        case actionTypes.UPLOAD_IMAGE_SUCCESS: return uploadImageSuccess( state, action );
        case actionTypes.UPLOAD_IMAGE_FAILED: return uploadImageFail( state, action );
        default: return state;
    }
}
export default reducer;
