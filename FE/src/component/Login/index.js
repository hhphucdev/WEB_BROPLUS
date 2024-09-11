import { memo, useState, useRef } from "react";
import "./style.scss";
import BannerLogin from "assets/user/images/hero/banner_login.png";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      phone: phone,
      password: password,
    };
  };

  const otpInputs = useRef([]);

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
    setIsForgotPassword(false);
    setIsOtpSent(false);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
    setIsRegistering(false);
    setIsOtpSent(false);
  };

  const handleSendOtp = () => {
    setIsOtpSent(true);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      otpInputs.current[index].value = value;
      if (index < otpInputs.current.length - 1) {
        otpInputs.current[index + 1].focus();
      }
    } else if (value === "") {
      if (index > 0) {
        otpInputs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="login-container">
      <div className="content">
        <img src={BannerLogin} alt="Example" className="login-image" />
      </div>
      <div className="form">
        {isForgotPassword ? (
          <div>
            <h3>Khôi phục mật khẩu</h3>
            <form>
              <label htmlFor="phone">Số điện thoại:</label>
              <input type="text" id="phone" name="phone" required />
              <button type="submit">Gửi liên kết khôi phục</button>
            </form>
            <button
              className="toggle-button"
              onClick={() => setIsForgotPassword(false)}
            >
              Quay lại
            </button>
          </div>
        ) : isRegistering ? (
          <div>
            <h3>Đăng ký tài khoản</h3>
            {!isOtpSent ? (
              <div>
                <form>
                  <label htmlFor="phone">Số điện thoại:</label>
                  <input type="text" id="phone" name="phone" required />
                  <button type="button" onClick={handleSendOtp}>
                    Gửi mã OTP
                  </button>
                </form>
                <button className="toggle-button" onClick={handleToggleForm}>
                  Đã có tài khoản? Đăng nhập
                </button>
              </div>
            ) : (
              <div>
                <h3>Xác nhận mã OTP</h3>
                <form>
                  <div className="otp-container">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        required
                        className="otp-input"
                        ref={(el) => (otpInputs.current[index] = el)}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace" && e.target.value === "") {
                            if (index > 0) {
                              otpInputs.current[index - 1].focus();
                            }
                          }
                        }}
                      />
                    ))}
                  </div>
                  <button type="submit">Xác nhận OTP</button>
                </form>
                <button className="toggle-button" onClick={handleToggleForm}>
                  Đã có tài khoản? Đăng nhập
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h3>Đăng nhập vào tài khoản</h3>
            <form onSubmit={handleLogin}>
              <label htmlFor="phone">Số điện thoại:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label htmlFor="password">Mật khẩu:</label>
              <div className="password-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? "Ẩn" : "Hiện"}
                </button>
              </div>
              <button type="submit">Đăng nhập</button>
            </form>
            <button className="toggle-button" onClick={handleToggleForm}>
              Chưa có tài khoản? Đăng ký
            </button>
            <button className="forgot-password" onClick={handleForgotPassword}>
              Quên mật khẩu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Login);
