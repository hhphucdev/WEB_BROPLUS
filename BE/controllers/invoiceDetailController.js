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

  //CREATE INVOICE DETAIL
  createInvoiceDetail: async (req, res) => {
    try {
      const { invoice, trip, quantity, unitPrice } = req.body;

      if (!invoice || !trip || !quantity || !unitPrice) {
        return res.status(400).json({
          message: "Vui lòng cung cấp đầy đủ thông tin chi tiết hóa đơn.",
        });
      }

      const newInvoiceDetail = new InvoiceDetail({
        invoice,
        trip,
        quantity,
        unitPrice,
      });

      const invoiceDetail = await newInvoiceDetail.save();

      return res.status(201).json(invoiceDetail);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Lỗi khi tạo chi tiết hóa đơn: ${err.message}` });
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
