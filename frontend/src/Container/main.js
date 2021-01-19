import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import FormData from 'form-data'; 
import * as actions from '../Store/Actions/index';

import { uploadImageStart } from '../Store/Actions/uploadImage';


class main extends Component {
    state={
        loading:false,
        selectedFile:"" ,
        formData : null,
        file:null,
        equ: "equ.jpg",
        res: "res.jpg",

    }
    
  
    onFileChange = (event)=> { 
        event.preventDefault();
        // Update the state 
        this.setState({selectedFile: event.target.files[0] ,tempo: 120}); 
        console.log("STATEEEE",this.state.selectedFile)
        };



        onFileUpload = (event) => { 
            event.preventDefault();
            this.setState({selectedFile: event.target.files[0],tempo: 120})
            console.log("STATEEEE",this.state.selectedFile)
            this.setState({
                file: URL.createObjectURL(event.target.files[0])
              })
            const formData = new FormData(); 
            formData.append( 
                "file", 
                event.target.files[0], 
                event.target.files[0].name 
              ); 

            this.props.onUploadImage(event.target.files[0]); 

        }; 
            
            // Update the formData object 
                
                
        
           
    render(){
        let imageRenEqu;
        let imageRenRes;
        let titleRen;
        let disease_name= this.props.disease_name;
        this.state.props= this.props.loading;


        if(this.props.loading===false){
            titleRen=(
                <p class="w3-opacity">{disease_name}</p>
            )
            
            imageRenEqu = (
            
                    
                    <img src={require("./images/"+this.state.equ)}alt="logo" class="logo2"></img>
                    
               
            )
            imageRenRes=(
                    <img src={require("./images/"+this.state.res)}alt="logo" class="logo2"></img>
            )
            
        }else{
            titleRen=(
                
                <p class="w3-opacity">{disease_name}</p>
    )
    
    imageRenEqu = (
    
            
            <img src={require("./images/"+this.state.equ)}alt="logo" class="logo2"></img>
            
       
    )
    imageRenRes=(
            <img src={require("./images/"+this.state.res)}alt="logo" class="logo2"></img>
    )
    

        }
    
        

        return (
           
         
        
         <div class="w3-content w3-padding pages">
         
         
            
             <div class="w3-container w3-padding-32" id="about">
                 <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">ABOUT</h3>
                 <p>With the growth of population, food shortage is becoming a massive concern and every year, large amounts of food produce is being disposed of due to the increase in the spread of diseases caused by the increasing pollution and reducing quality of soil. Artificial intelligence plays a major role in analysing what is wrong with our farming techniques and can also help us in increasing our yields significantly. Image recognition and the classification of diseases can help detect infected plants at an early stage thereby intimating the farmer and preventing further spread of any disease. 
                 </p>
             </div>
         
             
             <div class="w3-container w3-padding-32" id="projects">
                 <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">DEMONSTRATION</h3>
             </div>
         
             <div class="w3-row-padding">
                 
                 <div class="w3-col l3 m6 w3-margin-bottom">
                     <form >
                         <h3>Upload an image</h3>                   
                         <input  class="w3-block" id="upload" ref="upload"  name="image" type="file" accept="image/*"
                        onChange={this.onFileUpload}/><br/><br/>
                         <img src={this.state.file} alt="" srcset=""/><br/><br/>
                         {titleRen}
                     </form>            
                 </div>   
                 <div class="w3-col l3 m6 w3-margin-bottom">      
                     <h3>Histogram Equalization</h3><br/>
                    
                     <p> {imageRenEqu}</p>      
                 </div>
         
                 <div class="w3-col l3 m6 w3-margin-bottom">      
                     <h3>Leaf Segmentation</h3><br/>
                    
                     <p> {imageRenRes}</p>      
                 </div>
             </div>
         </div>
        )
    }
}

const mapSignInDispatchToProps =dispatch => {
  
    return{
        onUploadImage:(form) =>dispatch(actions.uploadImage(form))
    };
};
const mapStatetoProps = state =>{
    console.log('main page',state)
    console.log("down in the props",state.imgup.events)
    return {
        loading:state.imgup.loading,
        disease_name:state.imgup.events,
    };
};
export default connect(mapStatetoProps, mapSignInDispatchToProps)(main);