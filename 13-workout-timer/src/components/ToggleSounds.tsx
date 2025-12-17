import { memo } from 'react';
import type { toggleSoundProp } from '../types';

function ToggleSounds({ allowSound, setAllowSound }: toggleSoundProp) {
   return (
      <button
         className="btn-sound"
         onClick={() => setAllowSound((prevAllowSound) => !prevAllowSound)}
      >
         {allowSound ? '🔈' : '🔇'}
      </button>
   );
}

export default memo(ToggleSounds);
