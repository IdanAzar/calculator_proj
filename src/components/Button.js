import React from "react";

function Button(props) {
    // TODO: functional commponent
    // create botton

    return (<div className="button">
        <input type='button' value={props.lable} />
    </div>);
}

export default Button;