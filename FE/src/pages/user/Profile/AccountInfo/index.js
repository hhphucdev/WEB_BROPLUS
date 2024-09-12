import React, { useEffect, useState } from "react";
import "./style.scss";

const AccountInfo = () => {
  const [accountData, setAccountData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        const response = await fetch("/api/account-info"); 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAccountData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccountInfo();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="account-info-container">
      <div className="content">
        <h2>Thông tin tài khoản</h2>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        <div className="file-upload">
          <p>Dung lượng file tối đa 1 MB Định dạng: .JPEG, .PNG</p>
        </div>
        <div className="info-details">
          {accountData ? (
            <>
              <div className="info-item">
                <span className="info-label">Họ và tên:</span>
                <span className="info-value">{accountData.fullName}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Số điện thoại:</span>
                <span className="info-value">{accountData.phone}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Giới tính:</span>
                <span className="info-value">{accountData.gender}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{accountData.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Ngày sinh:</span>
                <span className="info-value">{accountData.dob}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Địa chỉ:</span>
                <span className="info-value">{accountData.address}</span>
              </div>
            </>
          ) : (
            <p>No account information available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
