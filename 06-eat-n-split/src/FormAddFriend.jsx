import { useState } from 'react';
import { Button } from './Button';

export function FormAddFriend({ onAddFriend }) {
   const [name, setName] = useState('');
   const [image, setImage] = useState('');
   const makeFriend = (name, image) => {
      const id = crypto.randomUUID();
      return {
         id: id,
         name: name,
         image: `${image}`,
         balance: 0,
      };
   };
   const handleAddFriend = (e) => {
      e.preventDefault();
      if (!name || !image) return;
      const newFriend = makeFriend(name, image);
      onAddFriend(newFriend);
      setName('');
      setImage('');
   };

   return (
      <form className="form-add-friend" onSubmit={handleAddFriend}>
         <label>👫 Friend name</label>
         <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
         />
         <label>🎑 imageUrl</label>
         <input
            type="text"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
         />
         <Button type="submit" text="Add friend" />
      </form>
   );
}
