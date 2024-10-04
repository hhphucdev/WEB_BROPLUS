import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const TicketHistory = () => {
  const currentUser = useSelector((state) => state.auth.login.currentUser);
  const [ticketHistory, setTicketHistory] = useState([]);

  useEffect(() => {
    const fetchTicketHistory = async () => {
      if (!currentUser || !currentUser.phone) {
        console.error("userId is not defined or is empty:", currentUser);
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
      } catch (error) {
        console.error("Lỗi khi tải lịch sử vé:", error);
      }
    };

    fetchTicketHistory();
  }, [currentUser]);

  return (
    <div className="ticket-history">
      <h2>Lịch sử mua vé</h2>
      <p>Theo dõi và quản lý quá trình lịch sử mua vé của bạn</p>
      <table>
        <thead>
          <tr>
            <th>Mã hóa đơn</th>
            <th>Số điện thoại</th>
            <th>Mã chuyến đi</th>
            <th>Số lượng vé</th>
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
                  <td>{detail.trip}</td>
                  <td>{detail.quantity}</td>
                  <td>
                    {detail.unitPrice.toLocaleString()} VND
                  </td>
                  <td>
                    {detail.totalPrice.toLocaleString()} VND
                  </td>
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
