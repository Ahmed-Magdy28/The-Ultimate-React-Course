import { useState } from 'react';
import './App.css';

function App() {
   const [bill, setBill] = useState(0);
   const [service, setService] = useState(0);
   const [friendService, setFriendService] = useState(0);
   const average = (service + friendService) / 2;
   const tip = bill * (average / 100);

   const onReset = () => {
      setBill(0);
      setService(0);
      setFriendService(0);
   };

   return (
      <>
         <Header text="Tip Calculator"></Header>
         <Div text="How much was the bill?">
            {' '}
            <input
               type="number"
               min="0"
               value={bill}
               placeholder="Bill Amount"
               onChange={(e) => {
                  const val = Number(e.target.value);
                  if (!isNaN(val)) setBill(val);
               }}
            />
         </Div>
         <Div text="How did you like the service?">
            <DropDownInput
               value={service}
               onChangeService={setService}
            ></DropDownInput>
         </Div>
         <Div text="How did your friend like the service?">
            <DropDownInput
               value={friendService}
               onChangeService={setFriendService}
            ></DropDownInput>
         </Div>
         <Div>
            <Text value={bill} tip={tip}></Text>
         </Div>

         <Button
            text="Reset"
            onClick={onReset}
            disabled={!bill && !service && !friendService}
         ></Button>
      </>
   );
}

export default App;

function Div({ text, children, onSubmit, ...props }) {
   return (
      <div {...props}>
         <label>
            {text}
            {children}
         </label>
      </div>
   );
}

function DropDownInput({ value, onChangeService }) {
   const handleChange = (e) => onChangeService(+e.target.value);
   return (
      <select value={value} onChange={handleChange}>
         <option value={0}>Dissatisfied</option>
         <option value={5}>It was ordinary</option>
         <option value={10}>It was good</option>
         <option value={15}>It was perfect</option>
      </select>
   );
}

function Text({ value, tip }) {
   if (!value) return null;
   const totalToPay = Math.round(value + tip);
   const formattedTip = tip.toFixed(0);
   return (
      <h3>
         You pay ${totalToPay} (${value}+ ${formattedTip} tip)
      </h3>
   );
}

function Button({ text, onClick, disabled, ...props }) {
   if (disabled) return null;
   return (
      <button onClick={onClick} {...props}>
         {text}
      </button>
   );
}

function Header({ text }) {
   return <h1>{text}</h1>;
}
