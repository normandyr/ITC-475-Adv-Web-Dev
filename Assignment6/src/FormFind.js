

let d = React.createElement;



const e = React.createElement;


const c = React.createElement;


const a = React.createElement;

const b = React.createElement;

class Italy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "Museums": false,
                  "Theatre": false,
                  "Parks and Recreation": false,
                  "City Tours": false};


  //this.handleCheckedChange = this.handleCheckedChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleCheck = this.handleCheck.bind(this);
  
  this.formContent = this.display3();
  }

  handleCheck(e){
    this.setState({
      [e.target.name]: !e.target.defaultChecked
    });
    console.log(this.state.checked)
  }

  handleSubmit(event) {
    //alert('Your information is: ' + JSON.stringify(this.state) + " " + "Please Make Sure To Select From One of The Vacation Options and Activities From Below");
  
    //event.preventDefault();
  }

  NumberList3(props) {
    let listItems = React.createElement("p", {key: props.item.id}, props.item.text, React.createElement("input", {
      name: props.item.text,
      type: "checkbox",
      onChange:(e) => this.setState({[e.target.name]: e.target.value}),
      defaultChecked: this.state.checked
    }))
    
    return (
      listItems
      
    )
  }

  display3(){
      
    let props = [{id: 5, text: "Italy", completed: this.state.checked},
    {id: 0, text: "Museums", completed: this.state.checked}, 
    {id: 1, text: "Theatre", completed: this.state.checked}, 
    {id: 2, text: "Parks and Recreation", completed: this.state.checked}, 
    {id: 3, text: "City Tours", completed: this.state.checked}];  
    let listItems = props.map((item) => this.NumberList3(
      {key: props.id, 
        item: item})); 

        return(React.createElement("div", {}, listItems));
  }
        
    
  render() {
    return (React.createElement("div", {
      className: "todo-list"
    },"Select From Destination and Activities From Below", React.createElement("br", {}), (this.formContent),React.createElement("br", {})))
  }
  
  }


class SouthAsia extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "Museums": false,
                  "Sailing": false,
                  "Beaches": false,
                  "Hiking": false,
                  "Boating": false
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleCheck = this.handleCheck.bind(this);
  
  this.formContent = this.display2();
  }

  handleCheck(e){
    this.setState({
      [e.target.name]: !e.target.defaultChecked
    });
    console.log(this.state.checked)
  }

  handleSubmit(event) {
    //alert('Your information is: ' + JSON.stringify(this.state) + " " + "Please Make Sure To Select From One of The Vacation Options and Activities From Below");
  
    //event.preventDefault();
  }

NumberList2(props) {
    let listItems = React.createElement("p", {key: props.id}, props.item.text, React.createElement("input", {
      name: props.item.text,
      type: "checkbox",
      onChange:(e) => this.setState({[e.target.name]: e.target.value}),
      defaultChecked: this.state.checked
    }))
    
    return (
      listItems
      
    )
  }

display2(){
      
    let props = [{id:5, text: "South Asia", completed: this.state.checked},
    {id: 0, text: "Museums", completed: this.state.checked}, 
    {id: 1, text: "Sailing", completed: this.state.checked}, 
    {id: 2, text: "Beaches", completed: this.state.checked}, 
    {id: 3, text: "Hiking", completed: this.state.checked}, 
    {id: 4, text: "Boating", completed: this.state.checked}];  
   let listItems = props.map((item) => this.NumberList2({
     key: props.id, 
     item: item})); 
    
    return(
      React.createElement("div", {}, listItems))}

  render() {
    

    return (React.createElement("div", {
      className: "todo-list"
    },"Select From Destination and Activities From Below", React.createElement("br", {}), (this.formContent),React.createElement("br", {})))
  }
  
  }


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
    },"Select From Destination and Activities From Below", React.createElement("br", {}), (this.formContent),React.createElement("br", {})))
  }
  
  }




class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { liked: false };
    this.state={City_Tours: false,
    Sporting: false,
    Cycling: false,
    Museums: false,
    Boating: false,
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
    //alert('Your information is: ' + JSON.stringify(this.state) + " " + "Please Make Sure To Select From One of The Vacation Options and Activities From Below");
  
    //event.preventDefault();
  }

  

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
      
    let props = [{id:5, text: "New Zealand", completed: true, hidden: true},
    {id: 0, text: "City Tours", completed: this.state.checked}, 
    {id: 1, text: "Sports", completed: this.state.checked}, 
    {id: 2, text: "Cycling", completed: this.state.checked}, 
    {id: 3, text: "Museums", completed: this.state.checked}, 
    {id: 4, text: "Boating", completed: this.state.checked}
    ];  
    let listItems = props.map((item) => this.NumberList1({
      key: props.id, 
      item: item})); 

      return(React.createElement("div", {}, listItems));
  }
        

  render() {
   

    //if(this.state.liked == true){
    
      //;}
    
    
      //'button',{ onClick: () => this.setState({ liked: true }) },"New Zealand",

    return (React.createElement("div", {
    className: "todo-list"
  },"Select From Destination and Activities From Below", React.createElement("br", {}), (this.formContent),React.createElement("br", {})))
}

}




class FormFind extends React.Component {
    constructor(props) {
      super(props);
      this.state= { Firstname: "", 
        Lastname: "",
        Email: "",
        Phone: "",
        Party_Size: "",
        Date: ""
                     };

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.formContent = this.FormDisplay();
}

FormCreate(props){
  let formMake = React.createElement("label", {key: props.id},React.createElement("br", {},), 
  (React.createElement("input", 
  {type: "text", name: props.item.text, placeholder: props.item.placeholder, size:"auto", required: "required", onChange:(e) => this.setState({[e.target.name]: e.target.value}), 
  value: this.state.value})))

  return formMake
}




handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleSubmit(event) {
  alert('Your information is: ' + JSON.stringify(this.state) + " " + JSON.stringify(LikeButton.this.state + "  " + "New Zealand"));

  event.preventDefault();

  


}

FormDisplay(){
  let props = [ {id: 10, text:"Firstname", placeholder: "Please Enter Your First Name"},
  {id: 11, text: "Lastname", placeholder: "Please Enter Your Last Name"}, 
  {id: 12, text: "Email", placeholder: "Please Enter Your Email"}, 
  {id: 13, text: "Phone", placeholder: "Please Enter Your Phone Number"},
  {id: 14, text: "Party_Size", placeholder: "Please Enter The Number of Children and Adults Going"},
  {id: 15, text: "Date", placeholder: "Please Enter Your Date For The Trip"}];  
    
  var listItems = props.map((item) => this.FormCreate({
    key: props.id,
    item: item
  }));

  return (
    React.createElement("div", {}, listItems));
}

render() {

  return React.createElement("form", {action: 'http://localhost/confirm.php', method: "get",
    onSubmit: this.handleSubmit
  }, (this.formContent), 
  React.createElement(LikeButton, {name: "New Zealand"}), 
  React.createElement(Cancun, {name: "Cancun"}),
  React.createElement(SouthAsia, {name: "South Asia"}),
  React.createElement(Italy, {name: "Italy"}), 
  React.createElement("input", {
    type: "submit",
    name: "submit",
    value: "Submit"
  }), React.createElement("input", {
    type: "reset",
    value: "Reset"
  }));

}
}
  
   const domContainer44 = document.getElementById("formfind");
  
   ReactDOM.render(
     (d(FormFind)),
     domContainer44);