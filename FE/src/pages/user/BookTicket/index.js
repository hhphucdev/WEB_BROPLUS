import React, { useState, useEffect } from "react";
import { MdEventSeat } from "react-icons/md";
import "./style.scss";
import { useNavigate, useParams } from "react-router-dom";

const SEAT_PRICE = 100000;

const BookTicket = ({ trips }) => {
  const { tripId } = useParams(); // Lấy tripId từ URL
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null); // State để lưu thông tin chuyến đi
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isTermsDialogOpen, setIsTermsDialogOpen] = useState(false);

  useEffect(() => {
    if (trips && Array.isArray(trips)) {
      console.log("Available trips:", trips); // Kiểm tra mảng trips
      const selectedTrip = trips.find((trip) => trip._id === tripId);
      console.log("Selected trip:", selectedTrip); // Kiểm tra chuyến đi được chọn
      setTrip(selectedTrip || null);
    } else {
      console.error("Trips data is not available or is not an array.");
    }
  }, [tripId, trips]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat.name)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat.name));
      setTotalPrice(totalPrice - SEAT_PRICE);
    } else {
      setSelectedSeats([...selectedSeats, seat.name]);
      setTotalPrice(totalPrice + SEAT_PRICE);
    }
  };

  const handleOpenDialog = () => {
    setIsTermsDialogOpen(true);
  };

  const handleCloseTermsDialog = () => {
    setIsTermsDialogOpen(false);
  };

  const Payment = () => {
    alert("Thanh toán thành công");
    // Có thể thêm logic thanh toán ở đây
  };

  const CancelPayment = () => {
    navigate(-1);
  };

  // Kiểm tra trip trước khi sử dụng
  if (!trip) {
    return <div>Không có thông tin chuyến đi.</div>; // Hiển thị thông báo nếu không có thông tin chuyến đi
  }

  return (
    <div className="book-ticket-page">
      <div className="main-content">
        <div className="left-column">
          <section className="seat-selection">
            <h2>Chọn ghế</h2>
            <div className="seat-info">
              <div className="seat-section">
                <h4>Tầng dưới</h4>
                <div className="seats">
                  {trip.seats.tangDuoi.map((seat) => (
                    <div
                      key={seat._id}
                      className={`seat ${
                        selectedSeats.includes(seat.name) ? "selected" : ""
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      <MdEventSeat className="seat-icon" />
                      {seat.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="seat-section">
                <h4>Tầng trên</h4>
                <div className="seats">
                  {trip.seats.tangTren.map((seat) => (
                    <div
                      key={seat._id}
                      className={`seat ${
                        selectedSeats.includes(seat.name) ? "selected" : ""
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      <MdEventSeat className="seat-icon" />
                      {seat.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="seat-legend">
              <div className="seat-status sold">Đã bán</div>
              <div className="seat-status available">Còn trống</div>
              <div className="seat-status selected">Đang chọn</div>
            </div>
          </section>
        </div>

        <div className="right-column">
          <section className="trip-info">
            <h2>Thông tin lượt đi</h2>
            <p>Tuyến xe: {trip.route}</p>
            <p>Thời gian xuất bến: {trip.departureTime}</p>
            <p>Số lượng ghế: {selectedSeats.length} Ghế</p>
            <p>Số ghế: {selectedSeats.join(", ")}</p>
            <p>Điểm trả khách: {trip.dropOffLocation}</p>
            <p>Tổng tiền lượt đi: {totalPrice.toLocaleString("vi-VN")}đ</p>
          </section>
          <section className="price-details">
            <h2>Chi tiết giá</h2>
            <p>Giá vé lượt đi: {SEAT_PRICE.toLocaleString("vi-VN")}đ</p>
            <p>Phí thanh toán: 0đ</p>
            <p>Tổng tiền: {totalPrice.toLocaleString("vi-VN")}đ</p>
          </section>
        </div>
      </div>

      <div className="bottom-content">
        <div className="top-bottom-content">
          <div className="left-bottom-column">
            <section className="customer-info">
              <h2>Thông tin khách hàng</h2>
              <form>
                <label>
                  Họ và tên
                  <input type="text" required />
                </label>
                <label>
                  Số điện thoại
                  <input type="text" required />
                </label>
                <label>
                  Email
                  <input type="email" required />
                </label>
                <div className="checkbox-container">
                  <input type="checkbox" id="agreeTerms" required />
                  <label htmlFor="agreeTerms">
                    Tôi đồng ý với{" "}
                    <button
                      type="button"
                      className="link-button"
                      onClick={handleOpenDialog}
                    >
                      điều khoản
                    </button>{" "}
                    của chúng tôi
                  </label>
                </div>
              </form>
            </section>
          </div>

          <div className="right-bottom-column">
            <section className="terms">
              <h2>Điều khoản</h2>
              <p>
                Khi đặt vé, quý khách đồng ý với các điều khoản của chúng tôi.
                Vui lòng kiểm tra thông tin trước khi xác nhận.
              </p>
            </section>
          </div>
        </div>

        <section className="pickup-info">
          <h2>Thông tin đón trả</h2>
          <div className="pickup-dropoff-container">
            <div className="pickup-point">
              <h3>Điểm đón</h3>
              <select>
                <option value="ben-xe-mien-tay">Bến xe Miền Tây</option>
                <option value="ben-xe-an-suong">Bến xe An Sương</option>
                <option value="ben-xe-mien-dong">Bến xe Miền Đông</option>
              </select>
              <p>
                Trước 21:45 29/08/2024 để được trung chuyển hoặc kiểm tra thông
                tin trước khi lên xe.
              </p>
            </div>
            <div className="drop-off-point">
              <h3>Điểm trả</h3>
              <select>
                <option value="tra-vinh">Trà Vinh</option>
                <option value="can-tho">Cần Thơ</option>
                <option value="soc-trang">Sóc Trăng</option>
              </select>
            </div>
          </div>
        </section>

        <section className="payment">
          <div className="payment-content">
            <div className="total-amount">
              <h3>Tổng số tiền thanh toán:</h3>
              <p>{totalPrice.toLocaleString("vi-VN")}đ</p>
            </div>
            <div className="payment-buttons">
              <button className="cancel-button" onClick={CancelPayment}>
                Hủy
              </button>
              <button className="pay-button" onClick={Payment}>
                Thanh toán
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Dialog cho các điều khoản */}
      {isTermsDialogOpen && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>Điều khoản sử dụng</h2>
            <p>
              Khi đặt vé, quý khách đồng ý với các điều khoản của chúng tôi. Vui
              lòng kiểm tra kỹ thông tin trước khi xác nhận.
            </p>
            <button onClick={handleCloseTermsDialog}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTicket;
