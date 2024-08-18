import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import { ROUTER } from './utils/router';
import MasterLayout from './pages/user/theme/masterLayout';
import ProfilePage from './pages/user/ProfilePage';
import Login from './component/Login';
import Footer from './pages/user/theme/Footer';

const renderUserRoutesWithLayout = () => {
  return (
    <MasterLayout>
      <Routes>
        <Route path={ROUTER.USER.HOME} element={<HomePage />} />
        <Route path={ROUTER.USER.PROFILE} element={<ProfilePage />} />
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return (
    <Routes>
      
      <Route path={ROUTER.USER.LOGIN} element={<><Login /><Footer /></>} />

      <Route path="*" element={renderUserRoutesWithLayout()} />
    </Routes>
  );
};

export default RouterCustom;
