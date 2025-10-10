import { useState, useReducer } from 'react';

const initialState = { count: 0, step: 1 };
const reducer = (state, action) => {
   switch (action.type) {
      // increase the count
      case 'increase':
         return { step: state.step, count: state.count + state.step };
      //   decrease the count
      case 'decrease':
         return { step: state.step, count: state.count - state.step };
      //   set the count by typing
      case 'set':
         return { step: state.step, count: action.payload };
      //   controlling the step with the slider
      case 'setStep':
         return { step: action.step, count: state.count };
      //   reset count and step
      case 'reset':
         return initialState;
      // making fall back if something wrong
      default:
         throw new Error('Unknown action');
   }
};

export const useDateCounter = () => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const { count, step } = state;

   // This mutates the date object.
   const date = new Date();
   date.setDate(date.getDate() + count);

   const dec = function () {
      dispatch({ type: 'decrease' });
   };

   const inc = function () {
      dispatch({ type: 'increase' });
   };

   const defineCount = function (e) {
      dispatch({ type: 'set', payload: Number(e.target.value) });
   };

   const defineStep = function (e) {
      dispatch({ type: 'setStep', step: Number(e.target.value) });
   };

   const reset = function () {
      dispatch({ type: 'reset' });
   };
   return { date, count, step, dec, inc, defineCount, defineStep, reset };
};
