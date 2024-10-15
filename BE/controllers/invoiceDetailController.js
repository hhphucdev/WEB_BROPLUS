const InvoiceDetail = require("../models/InvoiceDetail");

const invoiceDetailController = {
  //GET ALL INVOICE DETAILS
  getAllInvoiceDetails: async (req, res) => {
    try {
      const invoiceDetails = await InvoiceDetail.find();
      res.status(200).json(invoiceDetails);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // CREATE INVOICE DETAIL
  createInvoiceDetail: async (req, res) => {
    try {
      const { user, trip, quantity, unitPrice, paymentMethod, notes } =
        req.body;

      // Kiểm tra thông tin cần thiết
      if (!trip || !quantity || !unitPrice) {
        return res.status(400).json({
          message: "Vui lòng cung cấp đầy đủ thông tin chi tiết hóa đơn.",
        });
      }

      // Tạo số hóa đơn mới
      const { invoiceNumber } =
        await module.exports.generateInvoiceDetailNumber();

      // Tạo hóa đơn mới
      const newInvoice = new Invoice({
        invoiceNumber,
        user,
        trip,
        totalAmount: quantity * unitPrice,
        status: "PENDING",
        paymentMethod: paymentMethod || "CASH",
        notes: notes || "Thank you for your purchase!",
        invoiceDetails: [],
      });

      // Lưu hóa đơn vào DB
      await newInvoice.save();

      // Tạo chi tiết hóa đơn
      const newInvoiceDetail = new InvoiceDetail({
        invoice: newInvoice._id,
        trip,
        quantity,
        unitPrice,
      });

      const invoiceDetail = await newInvoiceDetail.save();

      // Cập nhật danh sách chi tiết hóa đơn trong hóa đơn
      newInvoice.invoiceDetails.push(invoiceDetail._id);
      await newInvoice.save();

      return res.status(201).json(invoiceDetail);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Lỗi khi tạo chi tiết hóa đơn: ${err.message}` });
    }
  },

  // Tạo số hóa đơn tự động theo định dạng: INVYYYYMMDD + số thứ tự
  generateInvoiceDetailNumber: async () => {
    try {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const day = today.getDate().toString().padStart(2, "0");

      // Tìm các hóa đơn đã tạo trong ngày
      const invoices = await Invoice.find({
        invoiceNumber: new RegExp(`INV${year}${month}${day}`, "i"),
      });

      // Tạo số hóa đơn mới
      const newInvoiceNumber = `INV${year}${month}${day}${(invoices.length + 1)
        .toString()
        .padStart(3, "0")}`;

      return { invoiceNumber: newInvoiceNumber };
    } catch (error) {
      throw new Error(`Lỗi khi tạo số hóa đơn: ${error.message}`);
    }
  },

  // Get invoice detail by invoice id
  getInvoiceDetailByInvoiceId: async (req, res) => {
    try {
      const invoiceDetails = await Invoice.findById(req.params.id).populate(
        "invoiceDetails"
      );
      res.status(200).json(invoiceDetails);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = invoiceDetailController;
