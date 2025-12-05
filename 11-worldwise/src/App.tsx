import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/AppComponents/CityList/CityList';
import CountryList from './components/AppComponents/CountryList/CountryList.tsx';
import City from './components/AppComponents/City/City.tsx';
import Form from './components/AppComponents/Form/Form.tsx';
import CitiesProvider from './contexts/CitiesProvider.tsx';
import AuthProvider from './contexts/AuthProvider.tsx';
import ProtectedRoute from './pages/ProtectedRoute.tsx';

function App() {
   return (
      <>
         <CitiesProvider>
            <AuthProvider>
               <BrowserRouter>
                  <Routes>
                     <Route index element={<Homepage />} />
                     <Route path="product" element={<Product />}></Route>
                     <Route path="pricing" element={<Pricing />}></Route>
                     <Route index element={<Homepage />} />
                     <Route
                        path="app"
                        element={
                           <ProtectedRoute>
                              <AppLayout />
                           </ProtectedRoute>
                        }
                     >
                        <Route
                           index
                           element={<Navigate to="cities" replace />}
                        />
                        <Route path="cities" element={<CityList />} />
                        <Route path="cities/:id" element={<City />} />
                        <Route path="form" element={<Form />} />
                        <Route path="countries" element={<CountryList />} />
                     </Route>
                     <Route path="login" element={<Login />}></Route>
                     <Route path="*" element={<PageNotFound />}></Route>
                  </Routes>
               </BrowserRouter>
            </AuthProvider>
         </CitiesProvider>
      </>
   );
}

export default App;
