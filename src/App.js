import { Component } from "react";

class Ss extends Component{
  constructor(props){
    super();
    this.name = props.name;
    setTimeout(500,() =>{
      this.name = "2"; 
    })
  }
  render(){
    return(
      <div >{this.name}</div>
    )
  }
}

function App() {
  return (
    <div className="wrapper" >
      <Ss name="ЛОМАКИН ХУsacsdЙ"></Ss>
    </div>
  );
}

export default App;
