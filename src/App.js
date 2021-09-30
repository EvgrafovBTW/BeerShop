//import { Component } from "react";
//import TodoList from "./Todo/TodoList";
import Box from "./MainBody/Box";
import Top from "./MainHead/Shlapa";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""}
  }

  callAPI(){
    fetch("http://localhost:8080/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
  }

  ComponentWillMount(){
    this.callAPI();
  }
}

function App() {

  /*const todos = [
    {id: 1, completed: false, title: "купить хуй"},
    {id: 1, completed: false, title: "купить ,kznm"},
    {id: 1, completed: false, title: "купить kjvfrbyf"}
  ]*/
  
  return (
    <div>
      <Top />
      <Box />
    </div>
  );
}

export default App;
