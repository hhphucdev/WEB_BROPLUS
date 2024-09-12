// UserRoutes.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import { ROUTER } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import Login from "./component/Login";
import TicketSearch from "pages/user/TicketSearch";
import Introduce from "pages/user/Introduce";
import Contact from "pages/user/Contact";
import Schedule from "pages/user/Schedule";
import BookTicket from "pages/user/BookTicket";
import Profile from "pages/user/Profile";
import Payment from "pages/user/Profile/Payment";
import AccountInfo from "pages/user/Profile/AccountInfo";
import TicketHistory from "pages/user/Profile/TicketHistory";
import Address from "pages/user/Profile/Address";
import ResetPassword from "pages/user/Profile/ResetPassword";

const UserRoutes = () => (
  <MasterLayout>
    <Routes>
      <Route path={ROUTER.USER.HOME} element={<HomePage />} />
      <Route path={ROUTER.USER.TICKET_SEARCH} element={<TicketSearch />} />
      <Route path={ROUTER.USER.INTRODUCE} element={<Introduce />} />
      <Route path={ROUTER.USER.CONTACT} element={<Contact />} />
      <Route path={ROUTER.USER.SCHEDULE} element={<Schedule />} />
      <Route path={ROUTER.USER.LOGIN} element={<Login />} />
      <Route path={ROUTER.USER.BOOK_TICKET} element={<BookTicket />} />
      
      {/* Profile và các chức năng con */}
      <Route path={ROUTER.USER.PROFILE} element={<Profile />}>
        <Route path={ROUTER.USER.PAYMENT} element={<Payment />} />
        <Route path={ROUTER.USER.ACCOUNT_INFO} element={<AccountInfo />} />
        <Route path={ROUTER.USER.TICKET_HISTORY} element={<TicketHistory />} />
        <Route path={ROUTER.USER.ADDRESS} element={<Address />} />
        <Route path={ROUTER.USER.RESET_PASSWORD} element={<ResetPassword />} />
      </Route>

      {/* Route fallback cho các đường dẫn không khớp */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  </MasterLayout>
);

export default UserRoutes;
