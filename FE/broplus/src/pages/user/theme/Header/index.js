import { memo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { ROUTER } from "utils/router";
import { MdAccountCircle } from "react-icons/md";
import { FcGlobe, FcRating } from "react-icons/fc";
import "./style.scss";

const content = {
  vi: {
    headerText: "Hệ thống đặt vé xe toàn quốc",
    loginText: "Đăng nhập/ Đăng ký",
    searchPlaceholder: "Bạn đang tìm gì",
    supportNumber: "0368564833",
    supportText: "Hỗ trợ 24/7",
    menu: [
      { name: "Trang chủ", path: ROUTER.USER.HOME },
      { name: "GIỚI THIỆU", path: ROUTER.USER.PRODUCT },
      { name: "LỊCH TRÌNH", path: "" },
      { name: "TRA CỨU VÉ", path: ROUTER.USER.LOGIN },
      { name: "Liên hệ", path: ROUTER.REGISTER },
      { name: "Tin tức", path: "" },
      { name: "Hướng dẫn", path: "" },
    ],
  },
  en: {
    headerText: "Nationwide Ticket Booking System",
    loginText: "Login/ Register",
    searchPlaceholder: "What are you looking for",
    supportNumber: "0368564833",
    supportText: "24/7 Support",
    menu: [
      { name: "Home", path: ROUTER.USER.HOME },
      { name: "INTRODUCTION", path: ROUTER.USER.PRODUCT },
      { name: "SCHEDULE", path: "" },
      { name: "TICKET INQUIRY", path: ROUTER.USER.LOGIN },
      { name: "Contact", path: ROUTER.REGISTER },
      { name: "News", path: "" },
      { name: "Guide", path: "" },
    ],
  },
};

const Header = () => {
  const location = useLocation();
  const [language, setLanguage] = useState("vi");

  const currentContent = content[language];

  // Kiểm tra xem hiện tại có phải là trang đăng nhập không
  const isLoginPage = location.pathname === ROUTER.USER.LOGIN;

  return (
    <>
      {/* Header Top Section */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-12 header_top_left">
              <div className="language-selector">
                <button
                  className="language-button"
                  onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
                >
                  {language === "vi" ? (
                    <FcRating className="language-icon" />
                  ) : (
                    <FcGlobe className="language-icon" />
                  )}
                  {language === "vi" ? " VI" : " EN"}
                </button>
              </div>
              <ul>
                <li>
                  <FaPhone />
                  <span>{currentContent.headerText}</span>
                </li>
              </ul>
            </div>
            <div className="col-6 header_top_right">
              <ul>
                <li>
                  <button className="rounded-button">
                    <MdAccountCircle />
                    <Link to={ROUTER.USER.LOGIN}>
                      {currentContent.loginText}
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hiển thị menu nếu không phải trang đăng nhập */}
      {!isLoginPage && (
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <nav className="header-menu">
                <ul>
                  {currentContent.menu.map((menuItem, menuKey) => (
                    <li
                      key={menuKey}
                      className={
                        location.pathname === menuItem.path ? "active" : ""
                      }
                    >
                      <Link
                        to={menuItem.path}
                        className={
                          location.pathname === menuItem.path ? "active" : ""
                        }
                      >
                        {menuItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Header);
