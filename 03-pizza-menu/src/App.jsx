import { pizzaData } from '../public/data';
import './index.css';
function App() {
   return (
      <>
         <div className="container">
            <Header />
            <Menu />
            <Footer />
         </div>
      </>
   );
}

export default App;

function Header() {
   const style = {};
   // const style = {
   //    color: 'red',
   //    fontSize: '48px',
   //    textTransform: 'uppercase',
   //    textAlign: 'center',
   //    fontWeight: 'bold',
   // };
   return (
      <>
         <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
         </header>
      </>
   );
}
function Menu() {
   const pizzas = pizzaData;
   // const pizzas = [];
   const numPizzas = pizzas.length;

   return (
      <>
         <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
               <>
                  <p>an italian cusine blahahah blahh blahh blahh</p>
                  <ul className="pizzas">
                     {pizzas.map((pizza) => {
                        return (
                           <Pizza
                              className="pizza"
                              key={pizza.name}
                              pizza={pizza}
                           />
                        );
                     })}
                  </ul>
               </>
            ) : (
               <p>We're still working on our menu. Please come back later :)</p>
            )}
         </main>
      </>
   );
}
function Pizza({ pizza, key }) {
   // if (props.pizza.soldOut) return null;
   return (
      <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`} key={key}>
         <img src={pizza.photoName} alt={pizza.name} />
         <div>
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
            <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
         </div>
      </li>
   );
}

function Footer() {
   const hour = new Date().getHours();
   const openHour = 12;
   const closeHour = 22;
   const isOpen = hour >= openHour && hour <= closeHour;
   return (
      <footer className="footer">
         {isOpen ? (
            <div className="order">
               <p>{new Date().toLocaleTimeString()} We're currently open!</p>
               <button className="btn">Order</button>
            </div>
         ) : (
            <Order openHour={openHour} closeHour={closeHour} />
         )}
      </footer>
   );
}
function Order({ openHour, closeHour }) {
   return (
      <p>
         We're happy to welcome you between {openHour}:00 and {closeHour}
         :00
      </p>
   );
}
