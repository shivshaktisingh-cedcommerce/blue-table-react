import React from "react";

import Component2 from "./Component2";
import Component3 from "./Component3";


class Component1 extends React.Component {
    render(){
        return(
            <div id="outer">
              <Component2/> 
              <Component3/>
            </div>
            
           
            
        )
    }
}
export default Component1;