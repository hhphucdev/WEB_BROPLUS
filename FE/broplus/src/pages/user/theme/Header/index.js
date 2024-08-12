import { memo } from "react";
import "./style.scss";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-6">Trái</div>
          <div className="col-6 header_top_right">
            <ul>
              <li>
                <Link to={""}>
                  <FaSquareFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaSquareFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaSquareFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaSquareFacebook />
                </Link>
                <span>Đăng nhập</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
