import { useState } from 'react';
import { messages } from '../public/message';
function App() {
   const [step, setStep] = useState(1);
   const [isOpen, setIsOpen] = useState(true);

   const handlePrevious = () =>
      setStep((step) => (step > 1 ? step - 1 : messages.length));
   const handleNext = () =>
      setStep((step) => (step === messages.length ? 1 : step + 1));
   const handleClose = () => setIsOpen((isOpen) => !isOpen);
   return (
      <>
         <button className="close" onClick={handleClose}>
            {isOpen ? '\u00D7' : '\u002B'}
         </button>
         {isOpen ? (
            <ShowSteps
               step={step}
               handlePrevious={handlePrevious}
               handleNext={handleNext}
            />
         ) : null}
      </>
   );
}

export default App;

// function
function ShowSteps({ step, handlePrevious, handleNext }) {
   return (
      <div className="steps">
         <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
         </div>
         <div className="message">
            Step {step} : {messages[step - 1]}
         </div>
         <div className="buttons">
            <Button
               onClick={handlePrevious}
               backgroundColor="#7950f2"
               color="#fff"
            >
               <span>👈</span> Previous
            </Button>
            <Button onClick={handleNext} backgroundColor="#7950f2" color="#fff">
               Next <span>👉</span>
            </Button>
         </div>
      </div>
   );
}

function Button({ backgroundColor, color, onClick, children }) {
   return (
      <button
         onClick={onClick}
         style={{ backgroundColor: backgroundColor, color: color }}
      >
         {children}
      </button>
   );
}
