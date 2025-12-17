import { formatCurrency } from '../helpers';
import type { CartItem } from '../types';

function CartItem({ item }: { item: CartItem }) {
   const { pizzaId, name, quantity, totalPrice } = item;

   return (
      <li>
         <p>
            {quantity}&times; {name}
         </p>
         <div>
            <p>{formatCurrency(totalPrice)}</p>
         </div>
      </li>
   );
}

export default CartItem;
