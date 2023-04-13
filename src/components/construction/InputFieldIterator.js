import { useState } from "react";

function InputFieldIterator({ initialNumber = 0, selfState = false, min, max, onNumberUp = () => null, onNumberDown = () => null, className = "" }) {
   const [number, setNumber] = useState(initialNumber);

   const numberUp = () => {
      if (number >= max) return;

      setNumber(oldValue => oldValue + 1);
      onNumberUp(number + 1);
   }

   const numberDown = () => {
      if (number <= min) return;

      setNumber(oldValue => oldValue - 1);
      onNumberDown(number - 1);
   }

   return (
      <div className={`inputFieldIterator${className !== "" ? ` ${className}` : ""}`}>
         <div className="inputFieldIteratorElement">
            {!selfState && number}
            {selfState && initialNumber}
         </div>
         <div className="inputFieldIteratorElement">
            <div className="inputFieldIteratorElementButton" onClick={event => numberUp()}>+</div>
            <div className="inputFieldIteratorElementButton" onClick={event => numberDown()}>-</div>
         </div>
      </div>
   );
}

export default InputFieldIterator;