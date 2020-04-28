'use strict';

const c = React.createElement;

class Cancun extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "Parks and Recreation": false,
    "Beaches" : false,
    "Boating": false,
    "Snorkeling": false};
  

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleCheck = this.handleCheck.bind(this);
  
  this.formContent = this.display4();
  }

  handleCheck(e){
    this.setState({
      [e.target.name]: !e.target.defaultChecked
    });
    console.log(this.state.checked)
  }

  handleSubmit(event) {
    alert('Your information is: ' + JSON.stringify(this.state) + " " + "Please Make Sure To Select From One of The Vacation Options and Activities From Below");
  
    event.preventDefault();}

    NumberList4(props) {
      let listItems = React.createElement("p", {key: props.id}, props.item.text, React.createElement("input", 
      { name: props.item.text,
        type: "checkbox",
        onChange:(e) => this.setState({[e.target.name]: e.target.value}),
        defaultChecked: props.item.completed
      }))
      
      return (
        listItems
        
      )
    }

    display4(){
      
      let props = [{id: 5, text: "Cancun", completed:false, hidden: true},
      {id: 0, text: "Parks and Recreation", completed: false}, 
      {id: 1, text: "Beaches", completed: false}, 
      {id: 2, text: "Boating", completed: false}, 
      {id: 3, text: "Snorkeling", completed: false}];  
    var listItems = props.map((item) => this.NumberList4(
      {key: props.id, 
        item: item})); 
      
      return(React.createElement("div", {}, listItems))
    }
       

  //onClick = (e)=>this.setState({ liked: false });

  render() {
   
    return (React.createElement("div", {
      className: "todo-list"
    }, React.createElement("br", {}), (this.formContent),React.createElement("br", {})))
  }
  
  }

 const domContainer4 = document.getElementById("cancun");

 ReactDOM.render(
   (c(Cancun)),
   domContainer4);
