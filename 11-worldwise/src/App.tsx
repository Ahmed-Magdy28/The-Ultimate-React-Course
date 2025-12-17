import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CityList from './components/AppComponents/CityList/CityList';
import CountryList from './components/AppComponents/CountryList/CountryList.tsx';
import City from './components/AppComponents/City/City.tsx';
import Form from './components/AppComponents/Form/Form.tsx';
import CitiesProvider from './contexts/CitiesProvider.tsx';
import AuthProvider from './contexts/AuthProvider.tsx';
import ProtectedRoute from './pages/ProtectedRoute.tsx';
import SpinnerFullPage from './components/AppComponents/SpinnerFullPage/SpinnerFullPage.tsx';

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const Login = lazy(() => import('./pages/Login'));

function App() {
   return (
      <>
         <CitiesProvider>
            <AuthProvider>
               <BrowserRouter>
                  <Suspense fallback={<SpinnerFullPage />}>
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
                  </Suspense>
               </BrowserRouter>
            </AuthProvider>
         </CitiesProvider>
      </>
   );
}

export default App;
