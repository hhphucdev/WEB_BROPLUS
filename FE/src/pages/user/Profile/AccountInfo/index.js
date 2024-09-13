import React, { useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const AccountInfo = () => {
  const currentUser = useSelector((state) => state.auth.login.currentUser);
  const [uploading, setUploading] = useState(false);

  if (!currentUser) {
    return <p>Không có thông tin tài khoản</p>;
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();

    // Đảm bảo phương thức onloadend được định nghĩa
    reader.onloadend = async () => {
      setUploading(true);
      await handleUpload(reader.result);
      setUploading(false);
    };

    // Bắt lỗi nếu có vấn đề khi đọc file
    reader.onerror = (error) => {
      console.error('Lỗi khi đọc file:', error);
    };

    reader.readAsDataURL(file); // Chuyển đổi file thành base64
  };

  const handleUpload = async (base64Image) => {
    try {
      const response = await fetch('/auth/update-avatar', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ base64Image })
      });
      const result = await response.json();
      if (response.ok) {
        console.log(result.message);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu:', error);
    }
  };
  

  return (
    <div className="account-info-container">
      <div className="content">
        <h2>Thông tin tài khoản</h2>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        <div className="avatar-container">
          <div className="avatar">
            <img
              src={
                currentUser.avatar || "https://picsum.photos/100/100?random=1"
              }
              alt="Avatar"
            />
          </div>
          <p className="avatar-upload">Cập nhật ảnh đại diện</p>
        </div>
        <div className="file-upload">
          <input
            type="file"
            accept=".jpeg,.jpg,.png"
            onChange={handleFileChange}
          />
          <button type="button" className="btn-upload" disabled={uploading}>
            {uploading ? "Đang tải lên..." : "Tải lên"}
          </button>
          <p>Dung lượng file tối đa 1 MB Định dạng: .JPEG, .PNG</p>
        </div>
        <div className="info-details">
          <div className="info-item">
            <span className="info-label">Họ và tên:</span>
            <span className="info-value">{currentUser.username}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Số điện thoại:</span>
            <span className="info-value">{currentUser.phone}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{currentUser.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Ngày sinh:</span>
            <span className="info-value">{currentUser.dateOfBirth}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Địa chỉ:</span>
            <span className="info-value">{currentUser.address}</span>
          </div>
          <button className="btn-update">Cập nhật thông tin</button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
