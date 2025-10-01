export const fetchAPIData = async (link, signal) => {
   try {
      // If no link provided, abort early
      if (!link) throw new Error('No link provided');

      // Perform fetch request
      const res = await fetch(link, { signal });
      if (!res.ok) throw new Error('❌ Network error: Failed to fetch data');

      // Parse response JSON
      const data = await res.json();
      console.log(data);

      // Successful response
      if (data.rates) return data;

      // Handle specific API errors
      //    signal is aborted without reason
      if (signal.aborted) return;
      if (data.Error === 'signal is aborted without reason') return;

      // "Too many results." error in popcorn app
      if (data.Error === 'Too many results.')
         throw new Error('please be more specific');
      else if (data.response !== 'true')
         throw new Error('Something went wrong!');
      else throw new Error('movie not found!');
   } catch (error) {
      if (error.message === 'signal is aborted without reason') return;
      if (
         error.message ===
         "Error: Cannot read properties of undefined (reading 'rates')"
      )
         return;
      throw new Error(error.message);
   }
};
