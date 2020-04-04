import React from "react";
import  "./image.css";
import pic4 from "./Image/pic4.jpg";

class Image extends React.Component{
     constructor(props){
        super(props);
        this.state ={
         users:[
{ pic: "./Image/pic4.jpg",descrip: "Hope is the power to believe that anything is possible", date :"April 4,2020" },
         { pic:"./Image/pic4.jpg",descrip: "Hope is the power to believe that anything is possible", date :"April 4,2020" },
          { pic:"./Image/pic4.jpg",descrip: "Hope is the power to believe that anything is possible", date :"April 4,2020"},
             { pic:"./Image/pic4.jpg",descrip: "Hope is the power to believe that anything is possible", date :"April 4,2020" },
             {pic:"./Image/pic4.jpg",  descrip: "Hope is the power to believe that anything is possible", date :"April 4,2020" },
               {pic:"./Image/pic6.jpg",  descrip: "Hope is the power to believe that anything is possible", date :"April 4,2020" }
                ]
     }
        
    }
    render(){
        return(
         <div className ="first">
            { this.state.users.map((item)=>(
          <div>
        <div class="card">
  <img src={pic4} class="card-img-top" alt="..."/>
  <div className="card-body second" >
          <h5 class="card-title">{item.descrip}</h5> <p class= "card-p"></p>
    <p class="card-text"> Ankita </p>
     <p class ="card-date">{item.date}</p>
           </div>
            </div>
            </div>
            ))}
     </div> 
            )}
   }
export default Image;