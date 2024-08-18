
import { useState } from 'react';
import './style.scss';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Nhập email của bạn" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" id="password" placeholder="Nhập mật khẩu" />
          </div>
          <button type="submit">{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</button>
        </form>
        <p className="switch-form">
          {isLogin ? (
            <>
              Chưa có tài khoản? <button onClick={() => setIsLogin(false)}>Đăng ký</button>
            </>
          ) : (
            <>
              Đã có tài khoản? <button onClick={() => setIsLogin(true)}>Đăng nhập</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
