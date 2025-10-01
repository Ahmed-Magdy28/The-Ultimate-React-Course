export const handleAddFriend = (friend) => {
   setFriends((friends) => [...friends, friend]);
};

export const handleOpenAddFriend = () => {
   setOpenAddFriend((open) => !open);
};

export const makeFriend = (name, image) => {
   const id = crypto.randomUUID();
   return {
      id: id,
      name: name,
      image: `${image}`,
      balance: 0,
   };
};

export const submitAddFriend = (e) => {
   e.preventDefault();
   if (!name || !image) return;
   const newFriend = makeFriend(name, image);
   onAddFriend(newFriend);
   setName('');
   setImage('');
};
