import { useState } from 'react';

export function Form({ setItems }) {
   const [description, setDescription] = useState('');
   const [quantity, setQuantity] = useState(1);

   const handleAddItem = (item) => {
      setItems((items) => [...items, item]);
   };
   const clearinput = () => {
      setDescription('');
      setQuantity(1);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (!description) return;
      // Add new item to the list
      const newItem = {
         id: Date.now(),
         description,
         quantity,
         packed: false,
      };
      handleAddItem(newItem);
      clearinput();
   };

   return (
      <form className="add-form" onSubmit={handleSubmit}>
         <h3>What do you need for your 😍 trip ?</h3>
         <select
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(() => Number(e.target.value))}
         >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
               <option key={num} value={num}>
                  {num}
               </option>
            ))}
         </select>
         <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(() => e.target.value)}
         />
         <button>Add</button>
      </form>
   );
}
