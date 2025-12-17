import { useSelector } from 'react-redux';
import type { RootState } from '../../types';

function Customer() {
   const fullName = useSelector((store: RootState) => store.customer.fullName);
   return <h2>👋 Welcome, {fullName ? fullName : '%NAME%'}</h2>;
}

export default Customer;
