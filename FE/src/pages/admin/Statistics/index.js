import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./style.scss";

// Đăng ký các thành phần Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Statistics = () => {
  const [revenueData, setRevenueData] = useState([]);
  const [ticketData, setTicketData] = useState([]);

  // Lấy dữ liệu thống kê từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const revenueResponse = await axios.get("/statistics/revenue");
        const ticketResponse = await axios.get("/statistics/tickets");

        setRevenueData(revenueResponse.data);
        setTicketData(ticketResponse.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu thống kê:", error);
      }
    };

    fetchData();
  }, []);

  // Cấu hình biểu đồ doanh thu (Bar Chart)
  const revenueChart = {
    labels: revenueData.map((item) => item.month),
    datasets: [
      {
        label: "Doanh thu (VND)",
        data: revenueData.map((item) => item.revenue),
        backgroundColor: "#4caf50",
      },
    ],
  };

  // Cấu hình biểu đồ vé bán ra (Pie Chart)
  const ticketChart = {
    labels: ticketData.map((item) => item.route),
    datasets: [
      {
        label: "Số lượng vé",
        data: ticketData.map((item) => item.ticketsSold),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4caf50"],
      },
    ],
  };

  return (
    <div className="statistics-container">
      <h2>Thống Kê Doanh Thu và Vé Bán</h2>
      <div className="chart-container">
        <div className="bar-chart">
          <h3>Doanh Thu Theo Tháng</h3>
          <Bar data={revenueChart} />
        </div>
        <div className="pie-chart">
          <h3>Số Lượng Vé Bán Theo Tuyến</h3>
          <Pie data={ticketChart} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
