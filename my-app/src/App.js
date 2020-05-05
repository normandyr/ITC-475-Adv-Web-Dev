import React from 'react';
import './App.css';

function App() {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  let timeOfDay;

  if (hours <=10) {
    timeOfDay = "Morning"
  }
  else if( hours === 11){
    if(min <=59){
      timeOfDay = "Morning"
    }
   
  }
  else if(hours === 17){
    if(min >= 1){
      timeOfDay = "Evening"

    }
  }
  else if (hours <= 23) {
    if(min <= 59){
      timeOfDay = "Evening"

    }
    else{
      timeOfDay = "Evening"
    }
    
  } else {
    timeOfDay = "Afternoon"
  }
  
  return (
    <div className="App">
      Good {timeOfDay}
    </div>
  );
}

export default App;
