import { memo, useState } from "react";
import "./style.scss";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";
import { ROUTER } from "utils/router";

const Header = () => {

  const [menu, setMenu] = useState([
    {
      name: "Trang chủ",
      path: ROUTER.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTER.USER.PRODUCT,
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubMenu: false,
      child: [
        {
          name: "Sản phẩm 1",
          path: "",
        },
        {
          name: "Sản phẩm 2",
          path: "",
        },
        {
          name: "Sản phẩm 3",
          path: "",
        }
      ]  
    },
    
    {
      name: "Bài viết",
      path: ROUTER.LOGIN,
    },
    {
      name: "Liên hệ",
      path: ROUTER.REGISTER,
    }
  ]);
  
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <ul>
                <li>
                  <Link to={""}>Trang chủ</Link>
                </li>
                <li>
                  <Link to={""}>Giới thiệu</Link>
                </li>
                <li>
                  <Link to={""}>Liên hệ {formatter(1000000)}</Link>
                </li>
              </ul>
            </div>
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

      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header-logo">
              <h1> SHOP BROPLUS </h1>
            </div>
          </div>
          <div className="col-xl-6">

            <nav className="header-menu">
              <ul>
                {
                  menu?.map((menu, menuKey) => (
                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                      <Link to={menu?.path}> 
                      {menu?.name}
                      </Link>
                      {
                        menu.child && (
                          <ul className="header-menu-dropdown">
                            {
                              menu.child.map((child, childKey) => (
                                <li key={'&{menuKey}&{childKey}'}>
                                  <Link to={child?.path}>
                                    {child?.name}
                                  </Link>
                                </li>
                              ))
                            }
                          </ul>
                        )
                      }
                    </li>
                  )) }

              </ul>
              
          </nav>
          </div>
          <div className="col-xl-3">
          <div className="header-cart">
              <div className="header-cart_price">
                <span>{formatter(1000000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <FaSquareFacebook />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
