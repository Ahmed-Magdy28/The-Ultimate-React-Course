import { useState } from 'react';
import { deposit, payLoan, requestLoan, withdraw } from './accountSlice';
import { useAppDispatch, useAppSelector } from '../../store';

function AccountOperations() {
   const [depositAmount, setDepositAmount] = useState<number | string>('');
   const [withdrawalAmount, setWithdrawalAmount] = useState<number | string>(
      '',
   );
   const [loanAmount, setLoanAmount] = useState<number | string>('');
   const [loanPurpose, setLoanPurpose] = useState<string>('');
   const [currency, setCurrency] = useState('USD');

   const storeDispatch = useAppDispatch();
   const {
      loan,
      balance,
      loanPurpose: accLoanPurpose,
      isLoading,
   } = useAppSelector((store) => store.account);

   function handleDeposit() {
      if (!depositAmount) return;
      storeDispatch(deposit(Number(depositAmount), currency));
      // storeDispatch(deposit(Number(depositAmount)));
      setDepositAmount('');
      setCurrency('USD');
   }

   function handleWithdrawal() {
      if (!withdrawalAmount) return;
      if (Number(withdrawalAmount) <= Number(balance)) {
         storeDispatch(withdraw(Number(withdrawalAmount)));
         setWithdrawalAmount('');
      }
   }

   function handleRequestLoan() {
      if (!loanAmount) return;
      if (!loanPurpose) return;
      storeDispatch(requestLoan(Number(loanAmount), loanPurpose));
      setLoanAmount('');
      setLoanPurpose('');
   }

   function handlePayLoan() {
      if (!loan) return;
      if (loan <= balance) storeDispatch(payLoan());
   }

   return (
      <div>
         <h2>Your account operations</h2>
         <div className="inputs">
            <div>
               <label>Deposit</label>
               <input
                  title="DepositAmount"
                  type="number"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(+e.target.value)}
               />
               <select
                  title="currencySelect"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
               >
                  <option value="USD">US Dollar</option>
                  <option value="EUR">Euro</option>
                  <option value="GBP">British Pound</option>
               </select>

               <button onClick={handleDeposit} disabled={isLoading}>
                  {isLoading ? 'Converting....' : `Deposit ${depositAmount}`}
               </button>
            </div>

            <div>
               <label>Withdraw</label>
               <input
                  title="WithdrawalAmount"
                  type="number"
                  value={withdrawalAmount}
                  onChange={(e) => setWithdrawalAmount(+e.target.value)}
               />
               <button onClick={handleWithdrawal}>
                  Withdraw {withdrawalAmount}
               </button>
            </div>

            <div>
               <label>Request loan</label>
               <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(+e.target.value)}
                  placeholder="Loan amount"
               />
               <input
                  value={loanPurpose}
                  onChange={(e) => setLoanPurpose(e.target.value)}
                  placeholder="Loan purpose"
               />
               <button onClick={handleRequestLoan}>Request loan</button>
            </div>
            {loan > 0 && (
               <div>
                  <span>
                     Pay back {loan}
                     {currency === 'USD' ? '$' : ''} {`(${accLoanPurpose})`}
                  </span>
                  <button onClick={handlePayLoan}>Pay loan</button>
               </div>
            )}
         </div>
      </div>
   );
}

export default AccountOperations;
