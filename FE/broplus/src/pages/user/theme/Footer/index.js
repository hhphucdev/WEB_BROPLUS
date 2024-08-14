import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer-about">
              <h1 className="footer-about-logo">BROPLUS</h1>
              <ul>
                <li>Địa chỉ: 260 Lê Đức Thọ, Quận Gò Vấp, TP.HCM</li>
                <li>Phone: 0368564833 </li>
                <li>Email: hoangphuchm11@gmail.com </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer-widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to="">Liên hệ</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm</Link>
                </li>
                <li>
                  <Link to="">Thông tin</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to="">Mua hàng</Link>
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
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer-widget">
              <h6>Khuyến mãi và ưu đãi khác</h6>
              <p>Đăng ký nhận thông tin tại đây</p>
              <form action="#">
                <div className="input-group">
              <input type="text" placeholder="Nhập email của bạn" />
              <button type= "submit" className="button-submit">Đăng ký</button>
              </div>
              <div className="footer-widget-social">
                <div>
                    <FaSquareFacebook />
                </div>
                <div>
                    <FaSquareFacebook />
                </div>
                <div>
                    <FaSquareFacebook />
                </div>
                <div>
                    <FaSquareFacebook />
                </div>

              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
