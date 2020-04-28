import React from "react"
import moon from "./imagesreact/moon.png"
import sun from "./imagesreact/sun.png"


function Iconreact(props) {  
        const date = new Date();
        const hours = date.getHours();
        const min = date.getMinutes();

        if(hours == 6 && min >= 1){
          return (
            <div className="Iconreact">
             <img className="moon" src= {moon} alt="Praise Moon!" style= {{width:"20%"}}/>
            </div>
          );
        }
        else if(hours >= 19 || hours <= 5){

          return (
            <div className="Iconreact">
             <img className="moon" src= {moon} alt="Praise Moon!" style= {{width:"20%"}}/>
            </div>
          );

        }
        else{
          return (
            <div className="Iconreact">
             <img className="sun" src= {sun} alt="Praise Sun!" style= {{width:"20%"}}/>
            </div>
          );

        }
}
       

  
  export default Iconreact;
