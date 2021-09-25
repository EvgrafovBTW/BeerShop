import React from "react";
import "./body.css"
import LeftMenu from "./LeftMenuItem";

function Box() {
    return(
      <div className="Box" >
          <div className="BoxLeft">
            <LeftMenu name = "Разливное"/>
            <LeftMenu name = "Набутыленное"/>
            <LeftMenu name = "Крафтовое"/>
            
          </div>
          <div className="BoxRight">

          </div>
      </div>
    )
}

export default Box;
