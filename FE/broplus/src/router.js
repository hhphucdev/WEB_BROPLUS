import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import { ROUTER } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/ProfilePage";

const renderUserRouter = () => {
  const userRoutes = [
    {
      path: ROUTER.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTER.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRoutes.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
