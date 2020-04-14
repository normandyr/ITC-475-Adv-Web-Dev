
const a = React.createElement;

class SouthAsia extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "Museums": false,
                  "Sailing": false,
                  "Beach": false,
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
    {id: 2, text: "Beach", completed: this.state.checked}, 
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
    },"Select Activities From Below", React.createElement("br", {}), "South Asia", (this.formContent),React.createElement("br", {})))
  }
  
  }
