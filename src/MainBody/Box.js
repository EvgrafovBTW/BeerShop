import React from "react";
import LeftMenu from "./MenuItem";

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