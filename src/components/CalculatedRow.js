import React from "react";
import Button from "./Button";

function CalculatedRow(props) {
    // TODO: functional commponent
    // show the input / output row of the calculator

    return(
        <div className="screen-row"> 
                <input type='text' value={props.stringEx} readOnly />
        </div>
    ); 
}

export default CalculatedRow;