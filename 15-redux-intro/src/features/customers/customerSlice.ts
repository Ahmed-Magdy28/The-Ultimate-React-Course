import { createSlice } from '@reduxjs/toolkit';
import { initialStateCustomer } from '../../config';

// Redux Toolkit Setup

const customerSlice = createSlice({
   name: 'customer',
   initialState: initialStateCustomer,
   reducers: {
      createCustomer: {
         prepare(fullName: string, nationalID: string) {
            return {
               payload: {
                  fullName,
                  nationalID,
                  createdAt: new Date().toISOString(),
               },
            };
         },

         reducer(
            state,
            action: {
               payload: {
                  fullName: string;
                  nationalID: string;
                  createdAt: string;
               };
            },
         ) {
            state.fullName = action.payload.fullName;
            state.nationalID = action.payload.nationalID;
            state.createdAt = action.payload.createdAt;
         },
      },
      deleteCustomer(state, action: { payload: number }) {
         if (action.payload > 0) return;
         state.fullName = '';
         state.nationalID = '';
         state.createdAt = '';
      },
      updateName(state, action: { payload: string }) {
         state.fullName = action.payload;
      },
   },
});

export const { createCustomer, deleteCustomer, updateName } =
   customerSlice.actions;

export default customerSlice.reducer;

// Redux Old Setup
// import type { CustomerAction, initialstateCustomer } from '../../types';
// export default function customerReducer(
//    state: initialstateCustomer = initialStateCustomer,
//    action: CustomerAction,
// ): initialstateCustomer {
//    switch (action.type) {
//       case 'customer/createCustomer':
//          return {
//             ...state,
//             fullName: action.payload.fullName,
//             nationalID: action.payload.nationalID,
//             createdAt: action.payload.createdAt,
//          };
//       case 'customer/deleteCustomer':
//          return { ...state, fullName: '', nationalID: '', createdAt: '' };
//       case 'customer/updateName':
//          return {
//             ...state,
//             fullName: action.payload,
//          };
//       default:
//          return state;
//    }
// }

// export function createCustomer(fullName: string, nationalID: string) {
//    return {
//       type: 'customer/createCustomer',
//       payload: {
//          fullName,
//          nationalID,
//          createdAt: new Date().toISOString(),
//       },
//    } as CustomerAction;
// }
// export function deleteCustomer() {
//    return {
//       type: 'customer/deleteCustomer',
//    } as CustomerAction;
// }
// export function updateName(fullName: string) {
//    return {
//       type: 'customer/updateName',
//       payload: fullName,
//    } as CustomerAction;
// }
