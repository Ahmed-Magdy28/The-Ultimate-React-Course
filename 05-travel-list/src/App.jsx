import { useState } from 'react';
import './index.css';
import { initialItems } from '../public/initialItems';
import { Logo } from './components/logo';
import { Form } from './components/Form';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';

function App() {
   const [items, setItems] = useState([...initialItems]);
   const handleDelete = (id) => {
      setItems((items) => items.filter((item) => item.id !== id));
   };
   const handleToggleItem = (id) => {
      if (!id) return;
      setItems((items) =>
         items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
         )
      );
   };
   const handleReset = () => {
      const confirmed = window.confirm('Are you sure you want to clear list?');
      if (confirmed) setItems((_) => []);
   };

   return (
      <>
         <div className="app">
            <Logo />
            <Form setItems={setItems} />
            <PackingList
               items={items}
               handleDelete={handleDelete}
               handleToggleItem={handleToggleItem}
               handleReset={handleReset}
            />
            <Stats items={items} />
         </div>
      </>
   );
}

export default App;
