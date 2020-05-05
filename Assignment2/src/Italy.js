'use strict';

const b = React.createElement;





function NumberList3(props) {
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

function display3(){
      
  let props = [{id: 0, text: "Museums", completed: false}, {id: 1, text: "Theatre", completed: false}, {id: 2, text: "Parks and Recreation", completed: false}, {id: 3, text: "City Tours", completed: false}];  
var listItems = props.map((item) => NumberList3({key: props.id, item: item})); 
  
  return(
    React.createElement("div", {
      className: "todo-list"
    },"Select Activities From Below", React.createElement("p", {
      className: "todo"
    }, listItems))
    );}




class Italy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      
     var x = display3();
     
      
            
      
    }

    return b(
      'button',
      { onClick: () => this.setState({ liked: true }) },"Venice, Italy",x );

    }
}

 const domContainer3 = document.getElementById("italy");

 ReactDOM.render(
   (b(Italy)),
   domContainer3);
