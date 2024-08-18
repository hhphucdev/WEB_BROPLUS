import { useState } from 'react';
import './style.scss';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOTP, setIsOTP] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleRegister = (e) => {
    e.preventDefault();
    if (phone) {
      setIsOTP(true);
    }
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]?$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5 && value) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        {isOTP ? (
          <>
            <h2>Xác Minh OTP</h2>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  className="otp-input"
                />
              ))}
            </div>
            <button type="submit">Xác Minh OTP</button>
          </>
        ) : (
          <>
            {isLogin && (
              <>
                <h2>Đăng Nhập</h2>
                <form onSubmit={handleRegister}>
                  <div className="form-group">
                    <label htmlFor="login-phone">Số điện thoại</label>
                    <input
                      type="text"
                      id="login-phone"
                      placeholder="Nhập số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="login-password">Mật khẩu</label>
                    <input type="password" id="login-password" placeholder="Nhập mật khẩu" />
                  </div>
                  <button type="submit">Đăng Nhập</button>
                </form>
                <p className="switch-form">
                  Chưa có tài khoản? <button onClick={() => setIsLogin(false)}>Đăng ký</button>
                </p>
              </>
            )}
            {!isLogin && (
              <>
                <h2>Đăng Ký</h2>
                <form onSubmit={handleRegister}>
                  <div className="form-group">
                    <label htmlFor="register-phone">Số điện thoại</label>
                    <input
                      type="text"
                      id="register-phone"
                      placeholder="Nhập số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="register-password">Mật khẩu</label>
                    <input type="password" id="register-password" placeholder="Nhập mật khẩu" />
                  </div>
                  <button type="submit">Đăng Ký</button>
                </form>
                <p className="switch-form">
                  Đã có tài khoản? <button onClick={() => setIsLogin(true)}>Đăng nhập</button>
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
