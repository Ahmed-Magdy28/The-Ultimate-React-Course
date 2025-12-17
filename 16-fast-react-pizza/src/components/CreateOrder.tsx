// https://uibakery.io/regex-library/phone-number

import { fakeCart } from '../fakeData';

function CreateOrder() {
   // const [withPriority, setWithPriority] = useState(false);
   const cart = fakeCart;

   return (
      <div>
         <h2>Ready to order? Let&apos;s go!</h2>

         <form>
            <div>
               <label>First Name</label>
               <input title="firstName" type="text" name="customer" required />
            </div>

            <div>
               <label>Phone number</label>
               <div>
                  <input title="phoneNumber" type="tel" name="phone" required />
               </div>
            </div>

            <div>
               <label>Address</label>
               <div>
                  <input title="address" type="text" name="address" required />
               </div>
            </div>

            <div>
               <input
                  type="checkbox"
                  name="priority"
                  id="priority"
                  // value={withPriority}
                  // onChange={(e) => setWithPriority(e.target.checked)}
               />
               <label htmlFor="priority">
                  Want to yo give your order priority?
               </label>
            </div>

            <div>
               <button>Order now</button>
            </div>
         </form>
      </div>
   );
}

export default CreateOrder;
