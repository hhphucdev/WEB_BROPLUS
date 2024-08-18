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
        {/* Thêm các route khác mà cần MasterLayout */}
      </Routes>
    </MasterLayout>
  );
};

// Main Router Component
const RouterCustom = () => {
  return (
    <Routes>
      {/* Route cho trang đăng nhập với footer */}
      <Route path={ROUTER.USER.LOGIN} element={<><Login /><Footer /></>} />

      {/* Routes sử dụng MasterLayout */}
      <Route path="*" element={renderUserRoutesWithLayout()} />
    </Routes>
  );
};

export default RouterCustom;
