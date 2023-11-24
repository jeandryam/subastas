import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAuth from './RequireAuth';


// Importa los componentes específicos para compradores y vendedores
import BuyerDashboard from '../components/User/BuyerDashboard';
import SellerDashboard from '../components/User/SellerDashboard';

// ... (otras importaciones)

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/itm/:itemId' element={<Item />} />
        <Route path='/itm/:itemId/edit' element={<EditItem />} />
        <Route path='/usr/:userEmail' element={<SellerItems />} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path='/additem'
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />

        {/* Rutas específicas para compradores */}
        <Route
          path='/buyer-dashboard'
          element={
            <RequireAuth role="buyer">
              <BuyerDashboard />
            </RequireAuth>
          }
        />

        {/* Rutas específicas para vendedores */}
        <Route
          path='/seller-dashboard'
          element={
            <RequireAuth role="seller">
              <SellerDashboard />
            </RequireAuth>
          }
        />

        {/* Rutas relacionadas con subastas */}
        <Route path='/subastas' element={<SubastaList />} />
        <Route path='/subastas/:subastaId' element={<SubastaDetail />} />
        <Route path='/crear-subasta' element={<CrearSubasta />} />

        <Route
          path='/signin'
          element={
            <RedirectLoggedUser>
              <SignIn />
            </RedirectLoggedUser>
          }
        />
        <Route
          path='/signup'
          element={
            <RedirectLoggedUser>
              <SignUp />
            </RedirectLoggedUser>
          }
        />
        <Route
          path='/reset'
          element={
            <RedirectLoggedUser>
              <ResetPassword />
            </RedirectLoggedUser>
          }
        />
        <Route path='/login' element={<Navigate to='/signin' />} />
        <Route
          path='*'
          element={<Error backButton>{MESSAGES.notFound}</Error>}
        />
      </Route>
    </Routes>
  );
};

export default Router;
