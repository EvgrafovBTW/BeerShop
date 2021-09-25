import React from "react";

function UserBarItem(props){
    return(
        <div className="UserBarItem">
            <span>{props.name}</span>
        </div>
    )
}

export default UserBarItem;