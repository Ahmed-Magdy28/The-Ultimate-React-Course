import { useDateCounter } from '../logic/useDateCounter';

function DateCounter() {
   const { step, defineStep, count, defineCount, date, inc, dec, reset } =
      useDateCounter();

   return (
      <div className="counter">
         <div>
            <input
               type="range"
               min="0"
               max="10"
               value={step}
               onChange={defineStep}
            />
            <span>{step}</span>
         </div>

         <div>
            <button onClick={dec}>-</button>
            <input value={count} onChange={defineCount} />
            <button onClick={inc}>+</button>
         </div>

         <p>{date.toDateString()}</p>

         <div>
            <button onClick={reset}>Reset</button>
         </div>
      </div>
   );
}
export default DateCounter;
