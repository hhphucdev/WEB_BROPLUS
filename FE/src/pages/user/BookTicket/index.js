import React, { useState, useEffect } from "react";
import { MdEventSeat } from "react-icons/md";
import "./style.scss";
import { useNavigate, useParams } from "react-router-dom";

const SEAT_PRICE = 100000;

const BookTicket = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();

  const [trip, setTrip] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0);
  const [isTermsDialogOpen, setIsTermsDialogOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit");

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/trip/${tripId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTrip(data);
      } catch (error) {
        console.error("Failed to fetch trip:", error);
      }
    };

    fetchTripDetails();
  }, [tripId]);

  useEffect(() => {
    setTotalPrice(selectedSeats.length * SEAT_PRICE);
  }, [selectedSeats]);

  const handleSeatClick = (seat) => {
    if (seat.status === "sold") {
      alert("Ghế này đã được bán.");
      return;
    }

    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats((prevSeats) => prevSeats.filter((s) => s !== seat.id));
    } else {
      setSelectedSeats((prevSeats) => [...prevSeats, seat.id]);
    }
  };

  const handleOpenDialog = () => setIsTermsDialogOpen(true);
  const handleCloseTermsDialog = () => setIsTermsDialogOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePayment = () => {
    if (selectedSeats.length === 0) {
      alert("Vui lòng chọn ít nhất một ghế.");
      return;
    }
    // gọi API để thanh toán: 
    
    alert("Thanh toán thành công với phương thức: " + paymentMethod);
  };

  const handleCancelPayment = () => navigate(-1);

  if (!trip) {
    return <div>Không có thông tin chuyến đi.</div>;
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
                      key={seat.id}
                      className={`seat ${
                        selectedSeats.includes(seat.id) ? "selected" : ""
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      <MdEventSeat className="seat-icon" />
                      {seat.id}
                    </div>
                  ))}
                </div>
              </div>
              <div className="seat-section">
                <h4>Tầng trên</h4>
                <div className="seats">
                  {trip.seats.tangTren.map((seat) => (
                    <div
                      key={seat.id}
                      className={`seat ${
                        selectedSeats.includes(seat.id) ? "selected" : ""
                      }`}
                      onClick={() => handleSeatClick(seat)}
                    >
                      <MdEventSeat className="seat-icon" />
                      {seat.id}
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
            <h2>Thông tin chuyến đi</h2>
            <p>
              Tuyến xe: {trip.from} - {trip.to}
            </p>
            <p>
              Thời gian xuất bến:{" "}
              {new Date(trip.formTime).toLocaleString("vi-VN")}
            </p>
            <p>Số lượng ghế: {selectedSeats.length} Ghế</p>
            <p>Số ghế: {selectedSeats.join(", ")}</p>
            <p>Điểm trả khách: {trip.to}</p>
            <p>Tổng tiền: {totalPrice.toLocaleString("vi-VN")}đ</p>
          </section>
          <section className="price-details">
            <h2>Chi tiết giá</h2>
            <p>Giá vé: {SEAT_PRICE.toLocaleString("vi-VN")}đ</p>
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
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Số điện thoại
                  <input
                    type="text"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Phương thức thanh toán
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="credit">Thẻ tín dụng</option>
                    <option value="bank_transfer">
                      Chuyển khoản ngân hàng
                    </option>
                    <option value="cash">Tiền mặt</option>
                  </select>
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
              <p>Trước 21:45 29/08/2024</p>
            </div>
            <div className="drop-off-point">
              <h3>Điểm trả</h3>
              <select>
                <option value="ben-xe-mien-tay">Bến xe Miền Tây</option>
                <option value="ben-xe-an-suong">Bến xe An Sương</option>
                <option value="ben-xe-mien-dong">Bến xe Miền Đông</option>
              </select>
              <p>Trước 21:45 29/08/2024</p>
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
              <button className="cancel-button" onClick={handleCancelPayment}>
                Hủy
              </button>
              <button className="pay-button" onClick={handlePayment}>
                Thanh toán
              </button>
            </div>
          </div>
        </section>

        {isTermsDialogOpen && (
          <div className="dialog-overlay">
            <div className="dialog">
              <h2>Điều khoản và điều kiện</h2>
              <p>
                Các điều khoản và điều kiện khi đặt vé. Vui lòng đọc kỹ trước
                khi tiếp tục.
              </p>
              <button onClick={handleCloseTermsDialog}>Đóng</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTicket;
