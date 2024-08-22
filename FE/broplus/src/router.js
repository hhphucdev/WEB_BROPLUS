import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import { ROUTER } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import Login from "./component/Login";
import Footer from "./pages/user/theme/Footer";
import TicketSearch from "pages/user/TicketSearch";
import Introduce from "pages/user/Introduce";
import Contact from "pages/user/Contact";

const UserRoutes = () => (
  <MasterLayout>
    <Routes>
      <Route path={ROUTER.USER.HOME} element={<HomePage />} />
      <Route path={ROUTER.USER.TICKET_SEARCH} element={<TicketSearch />} />
      <Route path={ROUTER.USER.INTRODUCE} element={<Introduce />} />
      <Route path={ROUTER.USER.CONTACT} element={<Contact />} />
    </Routes>
  </MasterLayout>
);

const RouterCustom = () => (
  <Routes>
    <Route
      path={ROUTER.USER.LOGIN}
      element={
        <>
          <Login />
          <Footer />
        </>
      }
    />
    <Route path="*" element={<UserRoutes />} />
  </Routes>
);

export default RouterCustom;
