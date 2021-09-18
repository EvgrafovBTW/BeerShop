//import { Component } from "react";
import TodoList from "./Todo/TodoList";




function App() {

  const todos = [
    {id: 1, completed: false, title: "купить хуй"},
    {id: 1, completed: false, title: "купить ,kznm"},
    {id: 1, completed: false, title: "купить kjvfrbyf"}
  ]
  return (
    <div className="wrapper" >
      <h1>ЛОМАКИН ХУЙ</h1>

      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
