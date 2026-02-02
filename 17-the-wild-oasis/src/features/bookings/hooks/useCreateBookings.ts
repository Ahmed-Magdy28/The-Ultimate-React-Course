import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import type { BookingType } from '../../../types';
import { createBookingAPI } from '../../../services/apiBookings';

export default function useCreateBooking() {
   const queryClient = useQueryClient();

   const {
      isPending: isCreating,
      mutate: createBooking,
      error: errorCreating,
   } = useMutation({
      mutationFn: ({ Booking }: { Booking: BookingType }) =>
         createBookingAPI(Booking),
      onSuccess: () => {
         toast.success('New cabin created successfully');
         queryClient.invalidateQueries({ queryKey: ['cabins'] });
      },
      onError: () => {
         toast.error('Failed to Create booking ');
         console.error(errorCreating);
      },
   });

   return { isCreating, createBooking, errorCreating };
}
