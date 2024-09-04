import React, { useState } from "react";
import { MdEventSeat } from "react-icons/md";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const seatData = {
  "tang-duoi": [
    "A01",
    "A02",
    "A03",
    "A04",
    "A05",
    "A06",
    "A07",
    "A08",
    "A09",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15",
    "A16",
    "A17",
  ],
  "tang-tren": [
    "B01",
    "B02",
    "B03",
    "B04",
    "B05",
    "B06",
    "B07",
    "B08",
    "B09",
    "B10",
    "B11",
    "B12",
    "B13",
    "B14",
    "B15",
    "B16",
    "B17",
  ],
};

const SEAT_PRICE = 100000;

const BookTicket = () => {
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      setTotalPrice(totalPrice - SEAT_PRICE);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
      setTotalPrice(totalPrice + SEAT_PRICE);
    }
  };

  const [isTermsDialogOpen, setIsTermsDialogOpen] = useState(false);
  const [isGeneralTermsDialogOpen, setIsGeneralTermsDialogOpen] =
    useState(false);

  const handleOpenDialog = () => {
    setIsTermsDialogOpen(true);
  };

  const handleCloseTermsDialog = () => {
    setIsTermsDialogOpen(false);
  };

  const handleCloseGeneralTermsDialog = () => {
    setIsGeneralTermsDialogOpen(false);
  };

  const Payment = () => {
    alert("Thanh toán thành công");
  };

  const CancelPayment = () => {
    navigate(-1);
  };

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
                  {seatData["tang-duoi"].map((seat) => (
                    <div
                      key={seat}
                      className={`seat ${
                        selectedSeats.includes(seat) ? "selected" : ""
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      <MdEventSeat className="seat-icon" />
                      {seat}
                    </div>
                  ))}
                </div>
              </div>
              <div className="seat-section">
                <h4>Tầng trên</h4>
                <div className="seats">
                  {seatData["tang-tren"].map((seat) => (
                    <div
                      key={seat}
                      className={`seat ${
                        selectedSeats.includes(seat) ? "selected" : ""
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      <MdEventSeat className="seat-icon" />
                      {seat}
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
            <p>Tuyến xe: Miền Tây - Trà Vinh</p>
            <p>Thời gian xuất bến: 22:00 29/08/2024</p>
            <p>Số lượng ghế: {selectedSeats.length} Ghế</p>
            <p>Số ghế: {selectedSeats.join(", ")}</p>
            <p>Điểm trả khách: Trà Vinh</p>
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
                  <input type="checkbox" id="agreeTerms2" required />
                  <label htmlFor="agreeTerms2">
                    Tôi đồng ý với{" "}
                    <button className="link-button" onClick={handleOpenDialog}>
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
            <h2>Điều khoản</h2>
            <p>
              Khi đặt vé, quý khách đồng ý với các điều khoản của chúng tôi. Vui
              lòng kiểm tra thông tin trước khi xác nhận.
            </p>
            <button onClick={handleCloseTermsDialog}>Đóng</button>
          </div>
        </div>
      )}

      {isGeneralTermsDialogOpen && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>Điều khoản chung</h2>
            <p>
              Đây là điều khoản chung của chúng tôi. Vui lòng đọc kỹ trước khi
              sử dụng dịch vụ.
            </p>
            <button onClick={handleCloseGeneralTermsDialog}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTicket;
