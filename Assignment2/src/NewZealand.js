'use strict';

const e = React.createElement;





function NumberList1(props) {
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

function display1(){
      
  let props = [{id: 0, text: "City Tours", completed: false}, {id: 1, text: "Sports", completed: false}, {id: 2, text: "Cycling", completed: false}, {id: 3, text: "Museums", completed: false}, {id: 4, text: "Boating", completed: false}];  
var listItems = props.map((item) => NumberList1({key: props.id, item: item})); 
  
  return(
    React.createElement("div", {
      className: "todo-list"
    },"Select Activities From Below", React.createElement("p", {
      className: "todo"
    }, listItems))
    );}




class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      
     var x = display1();
     
      
            
      
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },"New Zealand",x );

    }
}

 const domContainer = document.getElementById("new");

 ReactDOM.render(
   (e(LikeButton)),
   domContainer);
