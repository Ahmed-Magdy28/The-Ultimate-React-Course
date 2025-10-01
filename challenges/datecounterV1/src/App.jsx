import { useState } from 'react';
import './App.css';

function App() {
   return (
      <>
         <DateCounter />
      </>
   );
}

export default App;

function DateCounter() {
   const [step, setStep] = useState(1);
   const [count, setCount] = useState(0);
   const oneDay = 24 * 60 * 60 * 1000;
   const today = new Date();

   // derive the date based on today's date + count
   const date = new Date(today.getTime() + count * oneDay);

   const incrementSteps = () => setStep((step) => step + 1);
   const decrementSteps = () => setStep((step) => step - 1);
   const incrementCount = () => setCount((count) => count + step);
   const decrementCount = () => setCount((count) => count - step);
   const resetButton = () => {
      setCount(0);
      setStep(1);
   };

   return (
      <>
         <h1>Date Counter</h1>
         <div className="steps-container">
            {/* <button className="decrease-steps" onClick={decrementSteps}>
               -
            </button> */}
            <input
               className="slider"
               type="range"
               value={step}
               min="1"
               max="10"
               onChange={(e) => setStep(() => Number(e.target.value))}
            />
            <p className="steps">{step}</p>
            {/* <button className="increase-steps" onClick={incrementSteps}>
               +
            </button> */}
         </div>
         <div className="count-container">
            <button className="decrease-count" onClick={decrementCount}>
               -
            </button>
            <input
               type="number"
               className="count"
               value={count === 0 ? '' : count}
               onChange={(e) => setCount(() => Number(e.target.value))}
               autoFocus
            />
            <button className="increase-count" onClick={incrementCount}>
               +
            </button>
         </div>
         <div className="date-container">
            <p className="date">
               {count === 0 ? 'Today is ' : ''}
               {count < 0 ? `${Math.abs(count)} days ago was ` : ''}
               {count > 0 ? `${count} days from today is ` : ''}
               {date.toDateString()}
            </p>
         </div>
         {count != 0 || step != 1 ? (
            <button className="reset" onClick={resetButton}>
               Reset
            </button>
         ) : (
            ''
         )}
      </>
   );
}
