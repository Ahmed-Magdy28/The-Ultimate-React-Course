import { useEffect, useState } from 'react';
import { fetchAPIData } from './helper';
import { API_URL, fromCurrencyToken, toCurrencyToken } from './config';

import './App.css';

export default function App() {
   const [amount, setAmount] = useState(0);
   const [fromCurrency, setFromCurrency] = useState('USD');
   const [toCurrency, setToCurrency] = useState('EUR');
   const [convertedAmount, setConvertedAmount] = useState(null);
   const [error, setError] = useState(null);

   const handleAmountChange = (e) => {
      setAmount((_) => e.target.value);
   };

   useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      const convertCurrency = async (
         amount,
         fromCurrency,
         toCurrency,
         signal
      ) => {
         try {
            if (!amount || amount <= 0) return setConvertedAmount(null);
            const link = `${API_URL}${amount}${fromCurrencyToken}${fromCurrency}${toCurrencyToken}${toCurrency}`;
            const data = await fetchAPIData(link, signal);
            // If fetchAPIData returned nothing (aborted or failed)
            if (!data || !data.rates) return;
            const rate = data.rates[toCurrency];
            setConvertedAmount(rate);
         } catch (error) {
            throw new Error(error.message);
         }
      };

      if (amount && fromCurrency && toCurrency)
         convertCurrency(amount, fromCurrency, toCurrency, signal);
      return () => controller.abort();
   }, [amount, fromCurrency, toCurrency]);

   return (
      <>
         <div>
            <input
               type="text"
               value={amount}
               onChange={(e) => handleAmountChange(e)}
            />
            <label>From</label>
            <select onChange={(e) => setFromCurrency(e.target.value)}>
               <option value="USD">USD</option>
               <option value="EUR">EUR</option>
               <option value="CAD">CAD</option>
               <option value="INR">INR</option>
            </select>

            <label>TO</label>
            <select
               defaultValue={'EUR'}
               onChange={(e) => setToCurrency(e.target.value)}
            >
               <option value="USD">USD</option>
               <option value="EUR">EUR</option>
               <option value="CAD">CAD</option>
               <option value="INR">INR</option>
            </select>
            <p>{convertedAmount ? convertedAmount : 'output'}</p>
         </div>
      </>
   );
}
