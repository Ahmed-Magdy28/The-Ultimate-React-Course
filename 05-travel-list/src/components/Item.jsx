export function Item({ item, handleDelete, handleToggleItem }) {
   return (
      <li>
         <input
            type="checkbox"
            checked={item.packed}
            onChange={() => handleToggleItem(item.id)}
         />
         <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
            {item.quantity} {item.description}
         </span>
         <button
            onClick={() => {
               handleDelete(item.id);
            }}
         >
            🇽
         </button>
      </li>
   );
}
