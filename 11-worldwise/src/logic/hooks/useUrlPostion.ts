import { useSearchParams } from 'react-router-dom';

export const useUrlPosition = () => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [searchParams, _] = useSearchParams();

   const lat = Number(searchParams.get('lat'));
   const lng = Number(searchParams.get('lng'));

   return [lat, lng];
};
