import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const TicketHistory = () => {
  const currentUser = useSelector((state) => state.auth.login.currentUser);
  const [ticketHistory, setTicketHistory] = useState([]);
  const [tripDetails, setTripDetails] = useState({}); // Lưu thông tin chi tiết về các tuyến đường
  const [isLoading, setIsLoading] = useState(true); // Quản lý trạng thái tải dữ liệu

  useEffect(() => {
    const fetchTicketHistory = async () => {
      if (!currentUser || !currentUser.phone) {
        console.error("User ID is not defined or is empty:", currentUser);
        return;
      }
      try {
        console.log("User ID received:", currentUser.phone);
        const response = await fetch(
          `http://localhost:8000/invoice/user/${currentUser.phone}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setTicketHistory(data);

        // Lấy danh sách các tripId duy nhất từ dữ liệu
        const uniqueTripIds = [
          ...new Set(
            data.flatMap((ticket) =>
              ticket.invoiceDetails.map((detail) => detail.trip)
            )
          ),
        ];
        await fetchTripDetails(uniqueTripIds);
      } catch (error) {
        console.error("Lỗi khi tải lịch sử vé:", error);
      }
    };

    const fetchTripDetails = async (tripIds) => {
      try {
        const tripResponses = await Promise.all(
          tripIds.map((id) =>
            fetch(`http://localhost:8000/trip/${id}`).then((res) => res.json())
          )
        );

        const tripData = tripResponses.reduce((acc, trip) => {
          acc[trip.id] = trip; // Lưu mỗi trip theo trip._id
          return acc;
        }, {});

        setTripDetails(tripData);
        setIsLoading(false); // Dữ liệu đã được tải xong
      } catch (error) {
        console.error("Lỗi khi tải thông tin tuyến đường:", error);
        setIsLoading(false); // Ngay cả khi lỗi, dừng trạng thái tải
      }
    };

    fetchTicketHistory();
  }, [currentUser]);

  if (isLoading) {
    return <div>Đang tải dữ liệu lịch sử vé...</div>;
  }

  return (
    <div className="ticket-history">
      <h2>Lịch sử mua vé</h2>
      <p>Theo dõi và quản lý quá trình lịch sử mua vé của bạn</p>
      <table>
        <thead>
          <tr>
            <th>Mã hóa đơn</th>
            <th>Số điện thoại</th>
            <th>Tuyến đường</th>
            <th>Đơn giá</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th>Phương thức thanh toán</th>
            <th>Ghi chú</th>
            <th>Ngày phát hành</th>
          </tr>
        </thead>
        <tbody>
          {ticketHistory.map((ticket) => (
            <React.Fragment key={ticket._id}>
              {ticket.invoiceDetails.map((detail) => (
                <tr key={detail._id}>
                  <td>{ticket.invoiceNumber}</td>
                  <td>{ticket.user}</td>
                  <td>
                    {tripDetails[detail.trip]
                      ? ` ${tripDetails[detail.trip].from} - ${
                          tripDetails[detail.trip].to
                        }`
                      : "Thông tin tuyến đường chưa có"}
                  </td>
                  <td>{detail.unitPrice.toLocaleString()} VND</td>
                  <td>{detail.totalPrice.toLocaleString()} VND</td>
                  <td>{ticket.status}</td>
                  <td>{ticket.paymentMethod}</td>
                  <td>{ticket.notes}</td>
                  <td>{new Date(ticket.issueDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketHistory;
