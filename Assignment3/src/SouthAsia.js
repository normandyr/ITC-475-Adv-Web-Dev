'use strict';

const a = React.createElement;





function NumberList2(props) {
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

function display2(){
      
  let props = [{id: 0, text: "Museums", completed: false}, {id: 1, text: "Sailing", completed: false}, {id: 2, text: "Beach", completed: false}, {id: 3, text: "Hiking", completed: false}, {id: 4, text: "Boating", completed: false}];  
var listItems = props.map((item) => NumberList2({key: props.id, item: item})); 
  
  return(
    React.createElement("div", {
      className: "todo-list"
    },"Select Activities From Below", React.createElement("p", {
      className: "todo"
    }, listItems))
    );}




class SouthAsia extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      
     var x = display2();
     
      
            
      
    }

    return a(
      'button',
      { onClick: () => this.setState({ liked: true }) },"Maldives, South Asia",x );

    }
}

 const domContainer2 = document.getElementById("asia");

 ReactDOM.render(
   (a(SouthAsia)),
   domContainer2);
