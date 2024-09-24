import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ROUTER } from 'utils/router';
import { FaBus, FaUsers, FaChartBar } from 'react-icons/fa'; // Sử dụng icon

const HomePageAdmin = () => {
  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Menu Quản Trị</h2>
        <ul>
          <li>
            <Link to={ROUTER.ADMIN.ADDTRIP}><FaBus className="menu-icon" /> Chuyến Đi</Link>
          </li>
          <li>
            <Link to="/admin/manage-users"><FaUsers className="menu-icon" /> Người Dùng</Link>
          </li>
          <li>
            <Link to="/admin/statistics"><FaChartBar className="menu-icon" /> Thống Kê</Link>
          </li>
        </ul>
      </aside>
      <main className="admin-content">
        <h1>Chào Mừng Đến Với Trang Quản Trị</h1>
        <div className="admin-dashboard">
          <div className="dashboard-item">
            <FaBus className="dashboard-icon" />
            <h2>Chuyến Đi</h2>
            <p>Quản lý các chuyến đi của bạn.</p>
            <Link to={ROUTER.ADMIN.ADDTRIP} className="link-button">Thêm Chuyến Đi</Link>
          </div>
          <div className="dashboard-item">
            <FaUsers className="dashboard-icon" />
            <h2>Người Dùng</h2>
            <p>Quản lý người dùng và thông tin tài khoản.</p>
            <Link to="/admin/manage-users" className="link-button">Quản Lý Người Dùng</Link>
          </div>
          <div className="dashboard-item">
            <FaChartBar className="dashboard-icon" />
            <h2>Thống Kê</h2>
            <p>Xem thống kê về chuyến đi và người dùng.</p>
            <Link to="/admin/statistics" className="link-button">Xem Thống Kê</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePageAdmin;
