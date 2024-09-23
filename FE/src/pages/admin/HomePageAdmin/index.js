import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ROUTER } from 'utils/router';

const HomePageAdmin = () => {
  return (
    <div className="admin-home">
      <h1>Chào Mừng Đến Với Trang Quản Trị</h1>
      <div className="admin-dashboard">
        <div className="dashboard-item">
          <h2>Chuyến Đi</h2>
          <p>Quản lý các chuyến đi của bạn.</p>
          <Link to={ROUTER.ADMIN.ADDTRIP} className="link-button">Thêm Chuyến Đi</Link>
        </div>
        <div className="dashboard-item">
          <h2>Người Dùng</h2>
          <p>Quản lý người dùng và thông tin tài khoản.</p>
          <Link to="/admin/manage-users" className="link-button">Quản Lý Người Dùng</Link>
        </div>
        <div className="dashboard-item">
          <h2>Thống Kê</h2>
          <p>Xem thống kê về chuyến đi và người dùng.</p>
          <Link to="/admin/statistics" className="link-button">Xem Thống Kê</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageAdmin;
