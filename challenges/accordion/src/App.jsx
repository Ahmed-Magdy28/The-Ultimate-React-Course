import { useState } from 'react';
import { faqs } from '../public/data';
import './App.css';

function App() {
   return (
      <>
         <Header />
         <div>
            <Accordion />
         </div>
      </>
   );
}

export default App;

function Header() {
   return (
      <>
         <header className="header">
            <h1>Accordion Component</h1>
         </header>
      </>
   );
}

function Accordion() {
   const [activeIndex, setActiveIndex] = useState(null);
   const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
   };
   return (
      <>
         <div className="accordion">
            {faqs.map((el, index) => (
               <AccordionItem
                  key={el.title}
                  title={el.title}
                  text={el.text}
                  number={index + 1}
                  isActive={activeIndex === index}
                  onToggle={() => handleToggle(index)}
               />
            ))}
         </div>
      </>
   );
}

function AccordionItem({ title, text, number, isActive, onToggle }) {
   return (
      <>
         <div className={`item ${isActive ? 'open' : ''}`} onClick={onToggle}>
            <p className="number">{number < 9 ? `0${number}` : number}</p>
            <p className="text">{title}</p>
            <p className="icon">{!isActive ? '+' : '-'}</p>
            {isActive && <div className="content-box">{text}</div>}
         </div>
      </>
   );
}
