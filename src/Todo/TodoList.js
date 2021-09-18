import React from "react";
import PropTypes from 'prop-types'
import TodoIten from "./TodoItem";
const styles ={
    ul: {
        listStyle: "none",
        margin: 0,
        padding: 0 
    }
}


function TodoList(props) {
    return(
        <ul style={styles.ul}>
            { props.todos.map((todo, i) => {
                return <TodoIten todo = {todo} key={todo.id} i={i}/>
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList