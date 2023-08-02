import React from "react";

function Button(props) {

      // TODO: functional commponent
      // create botton
  
      return (<div className="button">
          <input type='button' value={props.value} onClick={()=>{
            props.setExercise((currentValue)=>{
            currentValue += props.value
            return currentValue
          })
          console.log()
          }}/>
      </div>);
      
}

export default Button;