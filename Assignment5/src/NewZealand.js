'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { liked: false };
    this.state={City_Tours: false,
    Sporting: false,
    Cycling: false,
    Museums: false,
    Boating: false
  }

  //this.handleCheckedChange = this.handleCheckedChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleCheck = this.handleCheck.bind(this);
  
  this.formContent = this.display1();
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

  

  NumberList1(props) {
    let listItems = React.createElement("p", {key: props.id}, props.item.text, React.createElement("input", {name: props.item.text,
      type: "checkbox",
      onChange:(e) => this.setState({[e.target.name]: e.target.value}),
      defaultChecked: false
    }))
    
    return (
      listItems      
    )
  }

  display1(){
      
    let props = [{id: 0, text: "City Tours", completed: this.state.checked}, 
    {id: 1, text: "Sports", completed: this.state.checked}, 
    {id: 2, text: "Cycling", completed: this.state.checked}, 
    {id: 3, text: "Museums", completed: this.state.checked}, 
    {id: 4, text: "Boating", completed: this.state.checked}];  
    let listItems = props.map((item) => this.NumberList1({
      key: props.id, 
      item: item})); 

      return(React.createElement("div", {}, listItems));
  }
        

  render() {
   

    //if(this.state.liked == true){
    
      //;}
    
    
      //'button',{ onClick: () => this.setState({ liked: true }) },"New Zealand",

    return (React.createElement("form", {id: "form1", action: 'http://localhost/test.php', method: "get",
    className: "todo-list"
  },"Select Activities From Below", React.createElement("br", {}), "New Zealand", (this.formContent),React.createElement("br", {})))
}

}

 const domContainer = document.getElementById("new");

 ReactDOM.render(
   (e(LikeButton)),
   domContainer);
