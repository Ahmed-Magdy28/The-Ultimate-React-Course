import supabase from './supabase';

// User signup
export async function signUpApi({
   email,
   password,
}: {
   email: string;
   password: string;
}) {
   const { data, error } = await supabase.auth.signUp({
      email,
      password,
   });

   if (error) {
      console.error(error);
      throw new Error('User could not be signed up');
   }
   return data;
}

// sign in a user
export async function loginAPI({
   email,
   password,
}: {
   email: string;
   password: string;
}) {
   const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
   });

   if (error) {
      console.error(error);
      throw new Error('User could not be logged in');
   }
   return data;
}

// Update User Data
export async function updateUserAPI({
   email,
   password,
   data,
}: {
   email?: string;
   password?: string;
   data?: object;
}) {
   const { data: userData, error } = await supabase.auth.updateUser({
      email,
      password,
      data,
   });

   if (error) {
      console.error(error);
      throw new Error('User could not be updated');
   }
   return userData;
}

// User logout
export async function signOutUserAPI() {
   const { error } = await supabase.auth.signOut();
   if (error) {
      console.error(error);
      throw new Error('User could not be signed out');
   }
   return;
}
