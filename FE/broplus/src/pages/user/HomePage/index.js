import { memo, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import category from "assets/user/images/categories/khuyenmai1.png";
import category2 from "assets/user/images/categories/khuyenmai2.png";
import category3 from "assets/user/images/categories/khuyenmai3.png";
import category4 from "assets/user/images/categories/khuyenmai4.png";
import category5 from "assets/user/images/categories/khuyenmai5.png";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTER } from "utils/router";

const HomePage = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [departureDate, setDepartureDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [returnDate, setReturnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [filters, setFilters] = useState({
    departureTime: [],
    busType: [],
    seatRow: [],
    floor: [],
  });

  const handleTabChange = () => {
    setIsRoundTrip(!isRoundTrip);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
    if (event.target.value > returnDate) {
      setReturnDate(event.target.value);
    }
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter(
          (item) => item !== value
        );
      } else {
        newFilters[category].push(value);
      }
      return newFilters;
    });
  };

  const deleteAllFilters = () => {
    setFilters({
      departureTime: [],
      busType: [],
      seatRow: [],
      floor: [],
    });
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
    { id: 1, image: category },
    { id: 2, image: category2 },
    { id: 3, image: category3 },
    { id: 4, image: category4 },
    { id: 5, image: category5 },
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

  const searchData = [
    {
      formTime: "12:30",
      toTime: "16:30",
      duration: "4 giờ",
      form: "Bến Xe Miền Đông",
      to: "Bến Xe Cần Thơ",
      busType: "Giường",
      seats: "8 chỗ trống",
      price: "150.000đ",
    },
    {
      departureTime: "12:30",
      pickup: "pickup",
      duration: "5 giờ",
      station: "16:00 Bến Xe Cần Thơ - Bến Xe Miền Tây",
      busType: "Ghế",
      seats: "10 chỗ trống",
      price: "200.000đ",
      icons: ["iconGiá rẻ bất ngờ", "iconGhế trống"],
    },
    {
      departureTime: "12:30",
      pickup: "pickup",
      duration: "5 giờ (Asian/Ho Chi Minh)",
      station: "16:00 Bến Xe Cần Thơ - Bến Xe Miền Tây",
      busType: "Ghế",
      seats: "10 chỗ trống",
      price: "200.000đ",
      icons: ["iconGiá rẻ bất ngờ", "iconGhế trống"],
    },
    {
      departureTime: "12:30",
      pickup: "pickup",
      duration: "5 giờ (Asian/Ho Chi Minh)",
      station: "16:00 Bến Xe Cần Thơ - Bến Xe Miền Tây",
      busType: "Ghế",
      seats: "10 chỗ trống",
      price: "200.000đ",
      icons: ["iconGiá rẻ bất ngờ", "iconGhế trống"],
    },
    {
      departureTime: "12:30",
      pickup: "pickup",
      duration: "5 giờ (Asian/Ho Chi Minh)",
      station: "16:00 Bến Xe Cần Thơ - Bến Xe Miền Tây",
      busType: "Ghế",
      seats: "10 chỗ trống",
      price: "200.000đ",
      icons: ["iconGiá rẻ bất ngờ", "iconGhế trống"],
    },
    {
      departureTime: "12:30",
      pickup: "pickup",
      duration: "5 giờ (Asian/Ho Chi Minh)",
      station: "16:00 Bến Xe Cần Thơ - Bến Xe Miền Tây",
      busType: "Ghế",
      seats: "10 chỗ trống",
      price: "200.000đ",
      icons: ["iconGiá rẻ bất ngờ", "iconGhế trống"],
    },
    {
      departureTime: "12:30",
      pickup: "pickup",
      duration: "5 giờ (Asian/Ho Chi Minh)",
      station: "16:00 Bến Xe Cần Thơ - Bến Xe Miền Tây",
      busType: "Ghế",
      seats: "10 chỗ trống",
      price: "200.000đ",
      icons: ["iconGiá rẻ bất ngờ", "iconGhế trống"],
    },
    {
      departureTime: "12:30",
      pickup: "pickup",
      duration: "5 giờ (Asian/Ho Chi Minh)",
      station: "16:00 Bến Xe Cần Thơ - Bến Xe Miền Tây",
      busType: "Ghế",
      seats: "10 chỗ trống",
      price: "200.000đ",
      icons: ["iconGiá rẻ bất ngờ", "iconGhế trống"],
    },
    {
      departureTime: "12:30",
      pickup: "pickup",
      duration: "5 giờ (Asian/Ho Chi Minh)",
      station: "16:00 Bến Xe Cần Thơ - Bến Xe Miền Tây",
      busType: "Ghế",
      seats: "10 chỗ trống",
      price: "200.000đ",
      icons: ["iconGiá rẻ bất ngờ", "iconGhế trống"],
    },
    {
      departureTime: "12:30",
      pickup: "pickup",
      duration: "5 giờ (Asian/Ho Chi Minh)",
      station: "16:00 Bến Xe Cần Thơ - Bến Xe Miền Tây",
      busType: "Ghế",
      seats: "10 chỗ trống",
      price: "200.000đ",
      icons: ["iconGiá rẻ bất ngờ", "iconGhế trống"],
    },
    {
      departureTime: "12:30",
      pickup: "pickup",
      duration: "5 giờ (Asian/Ho Chi Minh)",
      station: "16:00 Bến Xe Cần Thơ - Bến Xe Miền Tây",
      busType: "Ghế",
      seats: "10 chỗ trống",
      price: "200.000đ",
      icons: ["iconGiá rẻ bất ngờ", "iconGhế trống"],
    },
  ];

  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!hasSearched) {
      setHasSearched(true);
    } else {
      setHasSearched(false);
    }
  };

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
            <Link to={ROUTER.USER.HOME}>Hướng dẫn mua vé</Link>
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
                <input
                  type="date"
                  value={departureDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={handleDepartureDateChange}
                />
              </div>
              {isRoundTrip && (
                <div className="box-content_left_top_item">
                  <h6>Ngày về</h6>
                  <input
                    type="date"
                    value={returnDate}
                    min={departureDate}
                    onChange={handleReturnDateChange}
                  />
                </div>
              )}
              <div className="box-content_left_top_item">
                <h6>Số vé</h6>
                <input type="number" placeholder="Số lượng" min="1" max="5" />
              </div>
            </div>
          </div>
        </div>
        <div className="box-footer">
          <button onClick={handleSearch}>Tìm chuyến xe</button>
        </div>
      </div>

      {!hasSearched ? (
        <>
          <div className="container container_categories_slider">
            <div className="section_title_categories_slider">
              <h2 className="section_title_categories_slider_h2">
                KHUYẾN MÃI NỔI BẬT
              </h2>
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
                    <div className="trip-info-item" key={key}>
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
      ) : (
        <div className="container search-page">
          <div className="search-filters">
            <h3>BỘ LỌC TÌM KIẾM</h3>
            <button onClick={deleteAllFilters}>Bỏ lọc</button>
            <div className="filter-section">
              <h4>Giờ đi</h4>
              <label>
                <input
                  type="checkbox"
                  checked={filters.departureTime.includes("00:00 - 06:00")}
                  onChange={() =>
                    handleFilterChange("departureTime", "00:00 - 06:00")
                  }
                />{" "}
                Sáng sớm 00:00 - 06:00 (0)
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.departureTime.includes("06:00 - 12:00")}
                  onChange={() =>
                    handleFilterChange("departureTime", "06:00 - 12:00")
                  }
                />{" "}
                Buổi sáng 06:00 - 12:00 (1)
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.departureTime.includes("12:00 - 18:00")}
                  onChange={() =>
                    handleFilterChange("departureTime", "12:00 - 18:00")
                  }
                />{" "}
                Buổi chiều 12:00 - 18:00 (19)
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.departureTime.includes("18:00 - 24:00")}
                  onChange={() =>
                    handleFilterChange("departureTime", "18:00 - 24:00")
                  }
                />{" "}
                Buổi tối 18:00 - 24:00 (11)
              </label>
            </div>
            <div className="filter-section">
              <h4>Loại xe</h4>
              <label>
                <input
                  type="checkbox"
                  checked={filters.busType.includes("Ghế")}
                  onChange={() => handleFilterChange("busType", "Ghế")}
                />{" "}
                Ghế
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.busType.includes("Giường")}
                  onChange={() => handleFilterChange("busType", "Giường")}
                />{" "}
                Giường
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.busType.includes("Limousine")}
                  onChange={() => handleFilterChange("busType", "Limousine")}
                />{" "}
                Limousine
              </label>
            </div>
            <div className="filter-section">
              <h4>Hàng ghế</h4>
              <label>
                <input
                  type="checkbox"
                  checked={filters.seatRow.includes("Hàng đầu")}
                  onChange={() => handleFilterChange("seatRow", "Hàng đầu")}
                />{" "}
                Hàng đầu
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.seatRow.includes("Hàng giữa")}
                  onChange={() => handleFilterChange("seatRow", "Hàng giữa")}
                />{" "}
                Hàng giữa
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.seatRow.includes("Hàng cuối")}
                  onChange={() => handleFilterChange("seatRow", "Hàng cuối")}
                />{" "}
                Hàng cuối
              </label>
            </div>
            <div className="filter-section">
              <h4>Tầng</h4>
              <label>
                <input
                  type="checkbox"
                  checked={filters.floor.includes("Tầng trên")}
                  onChange={() => handleFilterChange("floor", "Tầng trên")}
                />{" "}
                Tầng trên
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.floor.includes("Tầng dưới")}
                  onChange={() => handleFilterChange("floor", "Tầng dưới")}
                />{" "}
                Tầng dưới
              </label>
            </div>
          </div>

          <div className="search-results">
            <h3>KẾT QUẢ TÌM KIẾM ({searchData.length})</h3>
            {searchData.length === 0 && <div>Không tìm thấy kết quả</div>}

            {searchData.map((item, index) => (
              <div className="search-result-item" key={index}>
                <div className="result-info">
                  <div className="result-details">
                    <div className="form-time">{item.formTime}</div>
                    <div className="duration">
                      ...............{item.duration}...............
                      
                      </div>
                    <div className="to-time">{item.toTime}</div>
                    <div className="bus-type">{item.busType}</div>
                    <div className="seats">{item.seats}</div>
                    <div className="from">{item.form}</div>
                    <div className="to">{item.to}</div>
                    <div className="price">{item.price}</div>
                  </div>
                </div>
                <div className="result-actions">
                  <button>Chọn ghế</button>
                  <button>Lịch trình</button>
                  <button>Trung chuyển</button>
                  <button>Chính sách</button>
                  <button>Chọn chuyến</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default memo(HomePage);
