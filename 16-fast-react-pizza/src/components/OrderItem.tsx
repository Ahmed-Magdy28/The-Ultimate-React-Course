import { formatCurrency } from '../helpers';
import type { item } from '../types';

function OrderItem({
   item,
   // isLoadingIngredients,
   // ingredients,
}: {
   item: item;
   // isLoadingIngredients: unknown;
   // ingredients: unknown;
}) {
   const { quantity, name, totalPrice } = item;

   return (
      <li>
         <div>
            <p>
               <span>{quantity}&times;</span> {name}
            </p>
            <p>{formatCurrency(totalPrice)}</p>
         </div>
      </li>
   );
}

export default OrderItem;
