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

  return (
    <div className="schedule-container">
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
  );
};

export default memo(Schedule);
