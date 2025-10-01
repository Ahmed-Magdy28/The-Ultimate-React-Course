import { Button } from './Button';

export function Friend({ friend, handleSelectFriend, selectedFriend }) {
   return (
      <li>
         <img src={friend.image} alt={friend.name} />
         <h3>{friend.name}</h3>
         {friend.balance < 0 && (
            <p className="red">
               {' '}
               you owe {friend.name} {Math.abs(friend.balance)}$
            </p>
         )}
         {friend.balance === 0 && <p> you and {friend.name} are even</p>}
         {friend.balance > 0 && (
            <p className="green">
               {' '}
               your friend {friend.name} owe you {friend.balance}$
            </p>
         )}
         <Button
            text={selectedFriend?.id === friend.id ? 'close' : 'Select'}
            onClick={() => handleSelectFriend(friend)}
         />
      </li>
   );
}
