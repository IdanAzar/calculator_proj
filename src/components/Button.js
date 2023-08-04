import React from "react";

function evaluate(ch, exercise) {
    switch(ch) {
      case '+':
      case '-':
      case '/':
      case '*':
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        // eslint-disable-next-line
        if(exercise != 'Error') {
          exercise += ch;
        }
        break;

      case 'Delete':
        /* eslint-disable */
        if(exercise != 'Error' && exercise != Infinity ) {
          exercise = exercise.slice(0, -1);
        }
        else {
          exercise = ''
        }
        /* eslint-enable */
        break;
      
      case 'Clear':
        exercise = '';
        break;

      case '=':
        try {
          /* eslint-disable */
          exercise = eval(exercise)
          if (exercise == Infinity) {
            exercise = 'Error'
          }
          else if (exercise == undefined) {
            exercise = ''
          }
      } catch (e) {
          if (e instanceof SyntaxError) {
              exercise = 'Error';
          }
      }
      /* eslint-enable */
      break;

      default:
        exercise = '';
        break;
        
    }
    return exercise
}



function Button(props) {

      // TODO: functional commponent
      // create botton
  
      /*return (<div className="button">
          <input type='button' value={props.value} onClick={()=>{
            props.setExercise((currentValue)=> {
            // currentValue += props.value
            currentValue = evaluate(props.value, currentValue)
            return currentValue
          })
          }}/>
      </div>);*/

      return (
          <input type='button' value={props.value} onClick={()=>{
            props.setExercise((currentValue)=> {
            // currentValue += props.value
            currentValue = evaluate(props.value, currentValue)
            return currentValue
          })
          }}/>
      );
      
}

export default Button;