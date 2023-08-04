// calculator.js File
// Imports.
import React, { useState } from "react";
import Button from "./Button.js";
import Title from "./Tiltle.js";
import CalculatedRow from "./CalculatedRow.js";
import './Calculator.css'


    function Calculator(){
		const [exercise, setExercise] = useState('');

		return (
			<div className="frame">
				<Title className='Title' value="CALCULATOR" />
				<div class="mainCalc">
					<CalculatedRow stringEx={exercise}/>
					<br/>
					<div className="button-row">
						<Button value="Clear"  setExercise={setExercise}/>
						<Button value="Delete" setExercise={setExercise} />
						<Button value="."  setExercise={setExercise}/>
						<Button value="/"  setExercise={setExercise}/>
					</div>                    
					<div className="button-row">
						<Button value="7"  setExercise={setExercise}/>
						<Button value="8"  setExercise={setExercise}/>
						<Button value="9"  setExercise={setExercise}/>
						<Button value="*"  setExercise={setExercise}/>
					</div>
					<div className="button-row">
						<Button value="4"  setExercise={setExercise}/>
						<Button value="5"  setExercise={setExercise}/>
						<Button value="6"  setExercise={setExercise}/>
						<Button value="-"  setExercise={setExercise}/>
					</div>
					<div className="button-row">
						<Button value="1"  setExercise={setExercise}/>
						<Button value="2"  setExercise={setExercise}/>
						<Button value="3"  setExercise={setExercise}/>
						<Button value="+"  setExercise={setExercise}/>
					</div>
					<div className="button-row" id = "last">
						<Button value="0"  setExercise={setExercise}/>
						<Button value="="  setExercise={setExercise}/>
					</div>
				</div>
			</div>
		);
	}

export default Calculator; // Export Calculator Component
