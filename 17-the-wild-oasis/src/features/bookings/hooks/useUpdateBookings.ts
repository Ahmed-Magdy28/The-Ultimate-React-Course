import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { BookingType } from '../../../types';
import { updateBookingAPI } from '../../../services/apiBookings';

export default function useUpdateBooking() {
   const queryClient = useQueryClient();

   const {
      isPending: isEditing,
      mutate: updateBooking,
      error: errorEditing,
   } = useMutation({
      mutationFn: ({ booking, id }: { booking: BookingType; id: number }) =>
         updateBookingAPI(booking, id),
      onSuccess: () => {
         toast.success('Cabin  successfully Edited');
         queryClient.invalidateQueries({ queryKey: ['cabins'] });
      },
      onError: () => {
         toast.error('Failed to Create cabin ');
         console.error(errorEditing?.message);
      },
   });

   return { isEditing, updateBooking, errorEditing };
}
