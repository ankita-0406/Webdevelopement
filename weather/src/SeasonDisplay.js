import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
    Summer :{
        text: "It's Summer Time!!!!!",
        iconName : "sun"
    },
    Winter:{
        text: "It's Winter!!!!!",
        iconName: "snowflake"
    }
};
const getSeason = (lat, month) =>{
     if(month>2  && month<9){
        return lat>0? "Summer": "Winter";
     } else {
   return lat>0 ? "Winter" : "Summer";
}
};
const SeasonDisplay = (props) =>{
    
 const season = getSeason( props.lat, new Date().getMonth());
    
const {text, iconName} = seasonConfig[season];
    
//const icon = season ==="Winter" ? "snowflake" : "sun";
    return (<div className  ={`season-display ${season}` }> 
            <i className ={ `icon-left massive ${iconName} icon `}/>
       <div className = "abc">   <h1 >  {text} </h1> </div>
        <i className = { `icon-right massive ${iconName} icon`}/>
        </div>
);

    
};

export default SeasonDisplay; 