export type BookingType = {
   created_at: string;
   startDate: string;
   endDate: string;
   cabinId: number;
   guestId: number;
   hasBreakfast: boolean;
   observations: string;
   isPaid: boolean;
   numGuests: number;
};
export type BookingsType = BookingType[];

export type CabinType = {
   id?: number;
   name: string;
   maxCapacity: number;
   regularPrice: number;
   discount: number;
   image: FileList | string;
   description: string;
};

export type CabinsType = CabinType[];

export type GuestType = {
   fullName: string;
   email: string;
   nationality: string;
   nationalID: string;
   countryFlag: string;
};
export type GuestsType = GuestType[];

export type SettingsType = {
   minBookingLength: number;
   maxBookingLength: number;
   maxGuestsPerBooking: number;
   breakfastPrice: number;
};

export type settingKeyType =
   | 'minBookingLength'
   | 'maxBookingLength'
   | 'maxGuestsPerBooking'
   | 'breakfastPrice';
