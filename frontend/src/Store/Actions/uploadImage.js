import * as actionTypes from './actionTypes';
import axios from 'axios';

export const uploadImageSuccess =(events) =>{
    return {
        type: actionTypes.UPLOAD_IMAGE_SUCCESS,
        events: events
    };
};
export const uploadImageFail =(events) =>{
    return {
        type: actionTypes.UPLOAD_IMAGE_FAILED,
        events: events
    };
};
export const uploadImageStart=(events) =>{
    return {
        type: actionTypes.UPLOAD_IMAGE_START,
        events: events
    };
};


export const uploadImage =(form)=>{
    return dispatch=>{
        console.log('WHAT FORM?',form)
        dispatch(uploadImageStart());
        var data = new FormData();
        data.append('file', form);
        localStorage.setItem('file', form)

var config = {
  method: 'post',
  url: 'http://127.0.0.1:5000',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': '*/*', 

  },
  data : data,
  
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  localStorage.setItem('name', response.data)
  dispatch(uploadImageSuccess(response.data));
})
.catch(function (error) {
  console.log(error);
});

           /*
            const fetchedProfiles = [];
            
            console.log("HEHE,your name",res.data.user.name);
            fetchedProfiles.push( {
                        fname:res.data.user.name,
                        lastname:res.data.user.lastname,
                        phone: res.data.user.phone,
                        fundraisers:res.data.user.fundraisers,
                        bills:res.data.user.bills,
                        email:res.data.user.email,
                        photo:res.data.user.pPicture,
*/

               
            //dispatch(fetchProfileSuccess(fetchedProfiles));
            //console.log("FETCHED EVENTS",fetchedProfiles);
       
    }
}