import { useApp } from '../logic/useApp';

export const DarkButton = () => {
   const { setIsFakeDark, isFakeDark } = useApp();

   return (
      <button
         onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
         className="btn-fake-dark-mode"
      >
         {isFakeDark ? '☀️' : '🌙'}
      </button>
   );
};
