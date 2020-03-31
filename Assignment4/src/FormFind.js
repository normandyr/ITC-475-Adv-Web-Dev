
'use strict'

let d = React.createElement;



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
  alert('Your information is: ' + JSON.stringify(this.state) + " " + "Please Make Sure To Select From One of The Vacation Options and Activities From Below");
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

  return React.createElement("form", {
    onSubmit: this.handleSubmit
  }, (this.formContent), React.createElement("input", {
    type: "submit",
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