'use strict';

const c = React.createElement;





function NumberList4(props) {
  let listItems = React.createElement("div", {
    key: props.id
  },React.createElement("p", null, props.item.text), React.createElement("input", {
    type: "checkbox",
    defaultChecked: props.item.completed
  }))
  
  return (
    listItems
    
  )
}

function display4(){
      
  let props = [{id: 0, text: "Parks and Recreation", completed: false}, {id: 1, text: "Beaches", completed: false}, {id: 2, text: "Boating", completed: false}, {id: 3, text: "Snorkeling", completed: false}];  
var listItems = props.map((item) => NumberList4({key: props.id, item: item})); 
  
  return(
    React.createElement("form", {
      className: "todo-list"
    },"Select Activities From Below", React.createElement("span", {
      className: "todo"
    }, listItems),React.createElement("br", {}), React.createElement("input", {type:"submit", value: "Submit"}), React.createElement("input", {type:"reset", value: "Reset"}))
    );}




class Cancun extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  onClick = (e)=>this.setState({ liked: false });

  render() {
    if (this.state.liked) {
      
     var x = display4();
     
      
            
      
    }

    return c(
      'button',
      { onClick: () => this.setState({ liked: true }) },"Cancun",x);

    }
}

 const domContainer4 = document.getElementById("cancun");

 ReactDOM.render(
   (c(Cancun)),
   domContainer4);
