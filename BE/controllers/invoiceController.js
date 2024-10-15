const Invoice = require("../models/Invoice");
const mongoose = require("mongoose");
const InvoiceDetail = require("../models/InvoiceDetail");

const invoiceController = {
  //GET ALL INVOICES
  getAllInvoices: async (req, res) => {
    try {
      const invoices = await Invoice.find();
      res.status(200).json(invoices);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // CREATE INVOICE
  // CREATE INVOICE
  createInvoice: async (req, res) => {
    try {
      // Tạo số hóa đơn mới bằng cách gọi hàm generateInvoiceNumber
      const { invoiceNumber } = await module.exports.generateInvoiceNumber();

      const {
        user,
        trip,
        totalAmount,
        status,
        paymentMethod,
        notes,
        invoiceDetails,
      } = req.body;

      // Tạo các chi tiết hóa đơn
      const createdInvoiceDetails = await InvoiceDetail.insertMany(
        invoiceDetails
      );

      // Tạo hóa đơn mới với số hóa đơn đã sinh ra
      const newInvoice = new Invoice({
        invoiceNumber,
        user,
        trip,
        totalAmount,
        status,
        paymentMethod,
        notes,
        invoiceDetails: createdInvoiceDetails.map((detail) => detail._id),
      });

      console.log(newInvoice);

      // Lưu hóa đơn vào cơ sở dữ liệu
      await newInvoice.save();

      // Trả về hóa đơn mới tạo
      res.status(201).json(newInvoice);
    } catch (error) {
      // Xử lý lỗi và trả về thông báo lỗi
      res.status(400).json({ error: error.message });
    }
  },

  // Tăng id tự động cho invoice khi tạo mới theo dạng INV + Ngày tháng năm + số thứ tự
  // Ví dụ: INV20210929001
  // Hàm này sẽ trả về invoiceNumber mới
  // Generate Invoice Number API
  generateInvoiceNumber: async () => {
    try {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const day = today.getDate().toString().padStart(2, "0");
  
      const pattern = `^INV${year}${month}${day}`;
  
      const lastInvoice = await Invoice.findOne({
        invoiceNumber: new RegExp(pattern, "i"),
      }).sort({ invoiceNumber: -1 });
  
      let nextNumber = 1;
  
      if (lastInvoice) {
        const lastNumber = parseInt(lastInvoice.invoiceNumber.slice(-3), 10);
        nextNumber = lastNumber + 1;
      }
  
      const newInvoiceNumber = `INV${year}${month}${day}${nextNumber
        .toString()
        .padStart(3, "0")}`;
  
      console.log('New Invoice Number:', newInvoiceNumber); 
      return { invoiceNumber: newInvoiceNumber };
    } catch (error) {
      throw new Error(`Lỗi khi sinh số hóa đơn: ${error.message}`);
    }
  },
  
  

  // Get invoice by user id
  getInvoiceByUserId: async (req, res) => {
    try {
      // Sử dụng req.params.userId hoặc req.params.id tùy thuộc vào cách bạn định nghĩa URL
      const userId = req.params.userId || req.params.id;
      const invoices = await Invoice.find({ user: userId }).populate(
        "invoiceDetails"
      ); // Thay 'invoiceDetails' với trường cần populate

      if (invoices.length === 0) {
        return res
          .status(404)
          .json({ message: "No invoices found for this user." });
      }

      res.status(200).json(invoices);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get invoice by trip id
  getInvoiceByTripId: async (req, res) => {
    try {
      const invoices = await Invoice.find({ trip: req.params.id });
      res.status(200).json(invoices);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = invoiceController;
