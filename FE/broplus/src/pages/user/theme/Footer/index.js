import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-about">
              <h1 className="footer-about-logo">BROPLUS</h1>
              <ul>
                <li>Địa chỉ</li>
                <li>Phone</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to="">Sản phẩm</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to="">Sản phẩm</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget">
              <h6>Khuyến mãi và ưu đãi khác</h6>
              <p>Đăng ký nhận thông tin tại đây</p>
              <input type="text" placeholder="Nhập email của bạn" />
              <button>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default memo(Footer);
