import type { Dispatch } from 'react';

export interface toggleSoundProp {
   allowSound: boolean;
   setAllowSound: Dispatch<React.SetStateAction<boolean>>;
}

export type workout = {
   name: string;
   numExercises: number;
};
export type workouts = workout[];
