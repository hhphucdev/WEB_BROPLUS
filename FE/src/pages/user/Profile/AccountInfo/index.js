import React, { useState } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAvatar, updateUserInfo } from "../../../../redux/apiRequest";


const AccountInfo = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.login.currentUser);
  const [uploading, setUploading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: currentUser?.username || "",
    email: currentUser?.email || "",
    dateOfBirth: currentUser?.dateOfBirth || "",
    address: currentUser?.address || "",
  });

  if (!currentUser) {
    return <p>Không có thông tin tài khoản</p>;
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      setUploading(true);
      await dispatch(updateUserAvatar(reader.result));
      setUploading(false);
    };
    reader.onerror = (error) => {
      console.error("Lỗi khi đọc file:", error);
    };
    reader.readAsDataURL(file);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleSave = () => {
    dispatch(updateUserInfo(userInfo));
    setIsEditing(false);
  };
  



  
  return (
    <div className="account-info-container">
      <div className="content">
        <h2>Thông tin tài khoản</h2>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        <div className="avatar-container">
          <div className="avatar">
            <img
              src={currentUser.avatar || "https://picsum.photos/100/100?random=1"}
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
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleChange}
              />
            ) : (
              <span className="info-value">{currentUser.username}</span>
            )}
          </div>
          <div className="info-item">
            <span className="info-label">Số điện thoại:</span>
            <span className="info-value">{currentUser.phone}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
            ) : (
              <span className="info-value">{currentUser.email}</span>
            )}
          </div>
          <div className="info-item">
            <span className="info-label">Ngày sinh:</span>
            {isEditing ? (
              <input
                type="date"
                name="dateOfBirth"
                value={formatDate(userInfo.dateOfBirth)}
                onChange={handleChange}
              />
            ) : (
              <span className="info-value">{formatDate(currentUser.dateOfBirth)}</span>
            )}
          </div>
          <div className="info-item">
            <span className="info-label">Địa chỉ:</span>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
              />
            ) : (
              <span className="info-value">{currentUser.address}</span>
            )}
          </div>
          <button className="btn-update" onClick={isEditing ? handleSave : handleEditClick}>
            {isEditing ? "Lưu thông tin" : "Cập nhật thông tin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
