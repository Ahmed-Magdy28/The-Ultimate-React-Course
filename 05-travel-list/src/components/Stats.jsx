export function Stats({ items }) {
   if (!items.length)
      return (
         <p className="stats">
            <em>Start adding some items to your packing list</em>
         </p>
      );
   const numItems = items.length;
   const numPacked = items.filter((item) => item.packed).length;
   const percetage = Math.round((numPacked / numItems) * 100) || 0;

   return (
      <footer className="stats">
         {percetage === 100 ? (
            <em>'You are ready to go! 🥳'</em>
         ) : (
            <em>
               🧳 You have {numItems} items on your list, and you already packed
               {` ${numPacked} item`} ({percetage}%)
            </em>
         )}
      </footer>
   );
}

// (
//    (items
//       .map((item) => {
//          return item.packed ? 1 : 0;
//       })
//       .reduce((a, b) => a + b, 0) /
//       items.length) *
//    100
// ).toFixed(0);
