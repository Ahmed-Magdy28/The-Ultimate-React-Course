import { useState } from 'react';
import { Button } from './Button';

export function FormSplitBill({ friend, handleSplitBill }) {
   const [bill, setBill] = useState(0);
   const [yourExpense, setyourExpense] = useState(0);
   const [whoIsPaying, setWhoIsPaying] = useState('user');
   const friendExpense = bill - yourExpense;
   const handleWhoPaid = () => {
      if (whoIsPaying === 'user') return friendExpense;
      if (whoIsPaying === 'friend') return -yourExpense;
   };

   return (
      <form
         className="form-split-bill"
         onSubmit={(e) => {
            e.preventDefault();
            handleSplitBill(handleWhoPaid());
         }}
      >
         <h2>Split a bill with {friend.name}</h2>
         <label>💰 Bill value</label>
         <input
            type="number"
            value={bill}
            required
            onChange={(e) => setBill(+e.target.value)}
         />
         <label>💰 your expense 💰</label>
         <input
            type="number"
            value={yourExpense}
            required
            onChange={(e) => setyourExpense(+e.target.value)}
         />
         <label>💰 {friend.name} expense</label>
         <input type="number" value={friendExpense} readOnly disabled />
         <label>💰 who is paying the bill💰</label>

         <select onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">you</option>
            <option value="friend">{friend.name}</option>
         </select>
         <Button text="Split Bill"></Button>
      </form>
   );
}
