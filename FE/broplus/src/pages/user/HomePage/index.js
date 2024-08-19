import { memo, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import category from "assets/user/images/categories/cat-3.jpg";
import category2 from "assets/user/images/categories/cat-1.jpg";
import category3 from "assets/user/images/categories/cat-2.jpg";
import category4 from "assets/user/images/categories/cat-3.jpg";
import category5 from "assets/user/images/categories/cat-4.jpg";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTER } from "utils/router";

const HomePage = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const handleTabChange = () => {
    setIsRoundTrip(!isRoundTrip);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      id: 1,
      image: category,
    },
    {
      id: 2,
      image: category2,
    },
    {
      id: 3,
      image: category3,
    },
    {
      id: 4,
      image: category4,
    },
    {
      id: 5,
      image: category5,
    },
  ];

  const tripInfo = [
    {
      id: 1,
      image: category,
      title: "Đà Lạt",
      price: "290,000 VND",
      content: "305km - 8 giờ",
    },
    {
      id: 2,
      image: category2,
      title: "Nha Trang",
      price: "290,000 VND",
      content: "305km - 8 giờ",
    },
    {
      id: 3,
      image: category3,
      title: "Phan Thiết",
      price: "290,000 VND",
      content: "305km - 8 giờ",
    },
  ];

  return (
    <>
      <div className="hero-item"></div>

      <div className="box">
        <div className="box_header">
          <div className="box_header_left col-lg-9">
            <input
              type="radio"
              name="tab"
              id="tab1"
              checked={!isRoundTrip}
              onChange={handleTabChange}
            />
            <label htmlFor="tab1">Một chiều</label>
            <input
              type="radio"
              name="tab"
              id="tab2"
              checked={isRoundTrip}
              onChange={handleTabChange}
            />
            <label htmlFor="tab2">Khứ hồi</label>
          </div>
          <div className="box_header_right col-lg-3">
            <Link to={ROUTER.LOGIN}>Hướng dẫn mua vé</Link>
          </div>
        </div>
        <div className="box-content">
          <div className="box-content_left">
            <div className="box-content_left_top">
              <div className="box-content_left_top_item">
                <h6>Điểm đi</h6>
                <input type="text" placeholder="Nơi đi" />
              </div>
              <div className="box-content_left_top_item">
                <h6>Điểm đến</h6>
                <input type="text" placeholder="Nơi đến" />
              </div>
              <div className="box-content_left_top_item">
                <h6>Ngày đi</h6>
                <input type="date" />
              </div>
              {isRoundTrip && (
                <div className="box-content_left_top_item">
                  <h6>Ngày về</h6>
                  <input type="date" />
                </div>
              )}
              <div className="box-content_left_top_item">
                <h6>Số vé</h6>
                <input type="number" placeholder="Số lượng" />
              </div>
            </div>
          </div>
        </div>
        <div className="box-footer">
          <button>Tìm chuyến xe</button>
        </div>
      </div>
      <div className="container container_categories_slider">
        <div className="section_title">
          <h2>KHUYẾN MÃI NỔI BẬT</h2>
        </div>
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItems.map((item, key) => (
            <div className="categories_slider_item" key={key}>
              <div
                className="image-container"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="container">
        <div className="featured">
          <div className="section_title">
            <h2>TUYẾN PHỔ BIẾN</h2>
            <h4>Được khách hàng tin tưởng và lựa chọn</h4>
          </div>
          <div className="popular-routes">
            <div className="trip-info">
              {tripInfo.map((trip, key) => (
                <div className="trip-info-item">
                  <div className="trip-info-content">
                    <div
                      className="image-container-trip"
                      style={{ backgroundImage: `url(${trip.image})` }}
                    ></div>
                    <div className="trip-details">
                      {[...Array(3)].map((_, index) => (
                        <div className="trip-detail-item" key={index}>
                          <h5>{trip.title}</h5>
                          <p className="price">{trip.price}</p>
                          <p className="content">{trip.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="featured">
          <div className="section_title">
            <h2>CHẤT LƯỢNG LÀ SỨ MỆNH</h2>
            <h4>Được khách hàng tin tưởng và lựa chọn</h4>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
