import React from "react";

function CalculatedRow(props) {
    // TODO: functional commponent
    // show the input / output row of the calculator

    return(
        <div className="screen-row"> 
                <input type='text' className="input-row" value={props.stringEx} readOnly />
        </div>
    ); 
}

export default CalculatedRow;