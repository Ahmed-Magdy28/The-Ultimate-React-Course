import { useState } from 'react';
import questions from '../public/questions';
import './index.css';

function App() {
   return (
      <>
         <FlashCards />
      </>
   );
}

export default App;

function FlashCards() {
   return (
      <>
         <div>
            {questions.map((question) => (
               <Card
                  key={question.id}
                  question={question}
                  answer={question.answer}
               />
            ))}
         </div>
      </>
   );
}

function Card({ question, answer }) {
   const [flipped, setFlipped] = useState(false);

   const handleClick = () => {
      setFlipped(!flipped);
   };

   return (
      <div className="card" onClick={handleClick}>
         {!flipped ? (
            <div className="question">{question.question}</div>
         ) : (
            <div className="answer">{answer}</div>
         )}
      </div>
   );
}
