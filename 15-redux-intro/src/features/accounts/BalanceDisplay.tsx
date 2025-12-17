import { useSelector } from 'react-redux';
import { formatCurrency } from '../../helper';
import type { RootState } from '../../types';

function BalanceDisplay() {
   const balance = useSelector((state: RootState) => state.account.balance);

   return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
