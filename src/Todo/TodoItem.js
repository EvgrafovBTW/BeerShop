import React from "react";
import PropTypes from "prop-types"

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid gray",
        marginBottom: "0.5rem",
        borderRadius: "4px",
        padding: "0.5rem 1rem",
    },
    input:{
        marginRight: "1rem"
    }
}

function TodoIten({todo, i}) {
     return (
         <li style={styles.li}>
             <span>
                <input type = "checkbox" style={styles.input} onChange={() => console.log(todo.id)}/>
             <strong>{i + 1}</strong>
             &nbsp;
             {todo.title}
             </span>

            <button className="rm">&times;</button>
        </li>
    )
}

TodoIten.propTypes = {
    todo: PropTypes.object.isRequired,
    i: PropTypes.number
}

export default TodoIten