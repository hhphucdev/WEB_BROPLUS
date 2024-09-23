import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const HomePageAdmin = () => {
  return (
    <div className="admin-home">
      <h1>Chào Mừng Đến Với Trang Quản Trị</h1>
      <div className="admin-dashboard">
        <div className="dashboard-item">
          <h2>Chuyến Đi</h2>
          <p>Quản lý các chuyến đi của bạn.</p>
          <Link to="/admin/add-trip">Thêm Chuyến Đi</Link>
        </div>
        <div className="dashboard-item">
          <h2>Người Dùng</h2>
          <p>Quản lý người dùng và thông tin tài khoản.</p>
          <Link to="/admin/manage-users">Quản Lý Người Dùng</Link>
        </div>
        <div className="dashboard-item">
          <h2>Thống Kê</h2>
          <p>Xem thống kê về chuyến đi và người dùng.</p>
          <Link to="/admin/statistics">Xem Thống Kê</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageAdmin;
