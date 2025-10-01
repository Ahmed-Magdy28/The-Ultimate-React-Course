import { useState } from 'react';
import { initialFriends } from './data';
import './App.css';
import { FormSplitBill } from './FormSplitBill';
import { Button } from './Button';
import { FormAddFriend } from './FormAddFriend';
import { FriendList } from './FriendList';

function App() {
   const [friends, setFriends] = useState(initialFriends);
   const [openAddFriend, setOpenAddFriend] = useState(false);
   const [selectedFriend, setSelectedFriend] = useState(null);
   const handleAddFriend = (friend) => {
      setFriends((friends) => [...friends, friend]);
   };

   const handleOpenAddFriend = () => {
      setOpenAddFriend((open) => !open);
      setSelectedFriend(null);
   };

   const handleSelectFriend = (friend) => {
      setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
      setOpenAddFriend(false);
   };

   const handleSplitBill = (value) => {
      setFriends((friends) =>
         friends.map((friend) =>
            friend.id === selectedFriend.id
               ? { ...friend, balance: friend.balance + value }
               : friend
         )
      );
      setSelectedFriend(null);
   };

   return (
      <>
         <div className="app">
            <div className="sidebar">
               <FriendList
                  friends={friends}
                  selectedFriend={selectedFriend}
                  handleSelectFriend={handleSelectFriend}
               />
               {openAddFriend && (
                  <FormAddFriend onAddFriend={handleAddFriend} />
               )}
               <Button
                  text={!openAddFriend ? 'Add friend' : 'close'}
                  onClick={handleOpenAddFriend}
               ></Button>
            </div>
            {selectedFriend && (
               <FormSplitBill
                  key={selectedFriend.id}
                  friend={selectedFriend}
                  handleSplitBill={handleSplitBill}
               />
            )}
         </div>
      </>
   );
}

export default App;
