import { memo, useState } from "react";
import "./style.scss";

const Schedule = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSwitch = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const routes = [
    {
      from: "An Nhơn",
      to: "TP. Hồ Chí Minh",
      type: "Giường",
      distance: "639km",
      time: "11 giờ 30 phút",
      price: "---",
    },
    {
      from: "An Nhơn",
      to: "TP. Hồ Chí Minh",
      type: "Giường",
      distance: "660km",
      time: "13 giờ 46 phút",
      price: "---",
    },
    {
      from: "An Nhơn",
      to: "TP.Hồ Chí Minh",
      type: "Limousine",
      distance: "627km",
      time: "10 giờ 7 phút",
      price: "---",
    },
    {
      from: "Bạc Liêu",
      to: "TP.Hồ Chí Minh",
      type: "Giường",
      distance: "271km",
      time: "6 giờ",
      price: "---",
    },
    {
      from: "Bảo Lộc",
      to: "Bình Sơn",
      type: "Limousine",
      distance: "650km",
      time: "15 giờ 30 phút",
      price: "---",
    },
    {
      from: "Bảo Lộc",
      to: "Đà Nẵng",
      type: "Giường",
      distance: "756km",
      time: "16 giờ 38 phút",
      price: "---",
    },
    {
      from: "Bảo Lộc",
      to: "Huế",
      type: "Giường",
      distance: "827km",
      time: "19 giờ",
      price: "---",
    },
    {
      from: "Bảo Lộc",
      to: "Huế",
      type: "Limousine",
      distance: "900km",
      time: "18 giờ 30 phút",
      price: "---",
    },
  ];


  return (
    <div className="schedule-container">
      <div className="search-section">
        <input
          type="text"
          className="search-bar"
          placeholder="Nhập điểm đi"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <button className="switch-button" onClick={handleSwitch}>
          ⇆
        </button>
        <input
          type="text"
          className="search-bar"
          placeholder="Nhập điểm đến"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div className="routes-header">
        <div className="header-item">Tuyến xe</div>
        <div className="header-item">Loại xe</div>
        <div className="header-item">Quãng đường</div>
        <div className="header-item">Thời gian</div>
        <div className="header-item">Giá vé</div>
        <div className="header-item"></div>
      </div>
      <div className="routes-list">
        {routes.map((route, index) => (
          <div className="route" key={index}>
            <div className="route-info">
              <div className="route-detail">
                <span className="location">{route.from}</span>
                <span className="arrow">→</span>
                <span className="location">{route.to}</span>
              </div>
              {route.type && <div className="type">{route.type}</div>}
              <div className="distance">{route.distance}</div>
              <div className="time">{route.time}</div>
              <div className="price">{route.price || "N/A"}</div>
              <div className="book-button">Tìm tuyến xe</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Schedule);
