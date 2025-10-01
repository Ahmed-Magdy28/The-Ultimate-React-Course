import { Friend } from './Friend';

export function FriendList({ friends, handleSelectFriend, selectedFriend }) {
   return (
      <>
         <ul>
            {friends.map((friend) => (
               <Friend
                  key={friend.id}
                  friend={friend}
                  selectedFriend={selectedFriend}
                  handleSelectFriend={handleSelectFriend}
               />
            ))}
         </ul>
      </>
   );
}
