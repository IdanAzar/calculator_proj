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
				<Title value="CALCULATOR" />
				<div class="mainCalc">
					<CalculatedRow stringEx={exercise}/>
					<div className="button-row">
						<Button value="Clear" className="buttonComponet" setExercise={setExercise}/>
						<Button value="Delete" className='buttonComponet' setExercise={setExercise} />
						<Button value="." className='buttonComponet' setExercise={setExercise}/>
						<Button value="/" className='buttonComponet' setExercise={setExercise}/>
					</div>                    
					<div className="button-row">
						<Button value="7" className='buttonComponet' setExercise={setExercise}/>
						<Button value="8" className='buttonComponet' setExercise={setExercise}/>
						<Button value="9" className='buttonComponet' setExercise={setExercise}/>
						<Button value="*" className='buttonComponet' setExercise={setExercise}/>
					</div>
					<div className="button-row">
						<Button value="4" className='buttonComponet' setExercise={setExercise}/>
						<Button value="5" className='buttonComponet' setExercise={setExercise}/>
						<Button value="6" className='buttonComponet' setExercise={setExercise}/>
						<Button value="-" className='buttonComponet' setExercise={setExercise}/>
					</div>
					<div className="button-row">
						<Button value="1" className='buttonComponet' setExercise={setExercise}/>
						<Button value="2" className='buttonComponet' setExercise={setExercise}/>
						<Button value="3" className='buttonComponet' setExercise={setExercise}/>
						<Button value="+" className='buttonComponet' setExercise={setExercise}/>
					</div>
					<div className="button-row">
						<Button value="0" className='buttonComponet' setExercise={setExercise}/>
						<Button value="=" className='buttonComponet' setExercise={setExercise}/>
					</div>
				</div>
			</div>
		);
	}

export default Calculator; // Export Calculator Component
