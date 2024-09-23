import React, { useState } from 'react';
import axios from 'axios';
import './style.scss'; 

const AddTrip = () => {
  const [tripData, setTripData] = useState({
    from: '',
    to: '',
    formTime: '',
    toTime: '',
    duration: '',
    price: '',
    seats: '',
    busType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/trip/create', tripData);
      console.log('Chuyến đi đã được thêm:', response.data);
      // Có thể chuyển hướng hoặc hiển thị thông báo thành công ở đây
    } catch (error) {
      console.error('Lỗi khi thêm chuyến đi:', error);
      // Xử lý lỗi
    }
  };

  return (
    <div className="add-trip-container">
      <h2>Thêm Chuyến Đi</h2>
      <form className="add-trip-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">Từ:</label>
          <input type="text" id="from" name="from" value={tripData.from} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="to">Đến:</label>
          <input type="text" id="to" name="to" value={tripData.to} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="formTime">Thời gian khởi hành:</label>
          <input type="datetime-local" id="formTime" name="formTime" value={tripData.formTime} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="toTime">Thời gian đến:</label>
          <input type="datetime-local" id="toTime" name="toTime" value={tripData.toTime} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Thời gian:</label>
          <input type="text" id="duration" name="duration" value={tripData.duration} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="price">Giá:</label>
          <input type="number" id="price" name="price" value={tripData.price} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="seats">Số ghế:</label>
          <input type="number" id="seats" name="seats" value={tripData.seats} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="busType">Loại xe:</label>
          <input type="text" id="busType" name="busType" value={tripData.busType} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Thêm Chuyến Đi</button>
      </form>
    </div>
  );
};

export default AddTrip;
