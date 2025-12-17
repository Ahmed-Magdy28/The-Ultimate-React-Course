import { memo, useEffect, useState } from 'react';
import clickSound from './../ClickSound.m4a';
import type { workouts } from '../types';

export const Calculator = memo(function Calculator({
   workouts,
   allowSound,
}: {
   workouts: workouts;
   allowSound: boolean;
}) {
   const [number, setNumber] = useState(
      workouts && workouts.length > 0 ? workouts.at(0)!.numExercises : 0,
   );
   const [sets, setSets] = useState(3);
   const [speed, setSpeed] = useState(90);
   const [durationBreak, setDurationBreak] = useState(5);
   const [duration, setDuration] = useState(0);

   useEffect(() => {
      setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
   }, [number, sets, speed, durationBreak]);
   const mins = Math.floor(duration);
   const seconds = (duration - mins) * 60;

   useEffect(() => {
      const playSound = () => {
         if (!allowSound) return;
         const sound = new Audio(clickSound);
         sound.play();
      };
      playSound();
   }, [duration, allowSound]);

   function handleIncrease() {
      setDuration((duration) => Math.floor(duration) + 1);
   }
   function handleDecrease() {
      setDuration((duration) => (duration > 0 ? Math.ceil(duration) - 1 : 0));
   }

   return (
      <>
         <form>
            <div>
               <label>Type of workout</label>
               <select
                  title="setNumber"
                  value={number}
                  onChange={(e) => setNumber(+e.target.value)}
               >
                  {workouts.map((workout) => (
                     <option value={workout.numExercises} key={workout.name}>
                        {workout.name} ({workout.numExercises} exercises)
                     </option>
                  ))}
               </select>
            </div>
            <div>
               <label>How many sets?</label>
               <input
                  title="set sets"
                  type="range"
                  min="1"
                  max="5"
                  value={sets}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                     const numberValue = Number(e.target.value);
                     setSets(numberValue);
                  }}
               />
               <span>{sets}</span>
            </div>
            <div>
               <label>How fast are you?</label>
               <input
                  title="setSpeed"
                  type="range"
                  min="30"
                  max="180"
                  step="30"
                  value={speed}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                     const numberValue = Number(e.target.value);
                     setSpeed(numberValue);
                  }}
               />
               <span>{speed} sec/exercise</span>
            </div>
            <div>
               <label>Break length</label>
               <input
                  title="setDurationBreak"
                  type="range"
                  min="1"
                  max="10"
                  value={durationBreak}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                     const numberValue = Number(e.target.value);
                     setDurationBreak(numberValue);
                  }}
               />
               <span>{durationBreak} minutes/break</span>
            </div>
         </form>
         <section>
            <button onClick={handleDecrease}>–</button>
            <p>
               {mins < 10 && '0'}
               {mins}:{seconds < 10 && '0'}
               {seconds}
            </p>
            <button onClick={handleIncrease}>+</button>
         </section>
      </>
   );
});
