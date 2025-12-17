export type CartItem = {
   pizzaId: number;
   name: string;
   quantity: number;
   unitPrice: number;
   totalPrice: number;
};

export type Cart = CartItem[];

export type Pizza = {
   id: number;
   name: string;
   unitPrice: number;
   ingredients: string[];
   soldOut: boolean;
   imageUrl: string;
};
export type Order = {
   id: string;
   customer: string;
   phone: string;
   address: string;
   priority: boolean;
   estimatedDelivery: string;
   cart: Cart;
   position: string;
   orderPrice: number;
   priorityPrice: number;
   status: Status;
};

export type Menu = Pizza[];
export type Status = 'preparing' | 'on the way' | 'delivered';
export type Orders = Order[];
export type item = CartItem;
export type positionObj = {
   coords: {
      latitude: number;
      longitude: number;
   };
};
