import React from "react";
import { Link } from "react-router-dom";
import { FaBus, FaUsers, FaChartBar } from "react-icons/fa"; // Sử dụng icon
import "./style.scss";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Menu Quản Trị</h2>
        <ul>
          <li>
            <Link to="/admin/add-trip">
              <FaBus className="menu-icon" /> Chuyến Đi
            </Link>
          </li>
          <li>
            <Link to="/admin/manage-users">
              <FaUsers className="menu-icon" /> Người Dùng
            </Link>
          </li>
          <li>
            <Link to="/admin/statistics">
              <FaChartBar className="menu-icon" /> Thống Kê
            </Link>
          </li>
        </ul>
      </aside>
      <main className="admin-content">
        {children} {/* Đây là nơi nội dung các trang con sẽ được hiển thị */}
      </main>
    </div>
  );
};

export default AdminLayout;
