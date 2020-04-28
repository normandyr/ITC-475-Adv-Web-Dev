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
    },"Select Activities From Below", React.createElement("br", {}), "New Zealand", (this.formContent),React.createElement("br", {})))
  }
  
  }
