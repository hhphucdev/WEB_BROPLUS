const InvoiceDetail = require("../models/InvoiceDetail");
const Invoice = require("../models/Invoice");

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

  createInvoiceDetail: async (req, res) => {
    try {
        const { invoiceId, trip, quantity, unitPrice } = req.body;

        // Kiểm tra thông tin cần thiết
        if (!invoiceId || !trip || !quantity || !unitPrice) {
            return res.status(400).json({
                message: "Vui lòng cung cấp đầy đủ thông tin chi tiết hóa đơn.",
            });
        }

        // Tìm hóa đơn hiện tại bằng invoiceId
        const currentInvoice = await Invoice.findById(invoiceId);
        if (!currentInvoice) {
            return res.status(404).json({ message: "Hóa đơn không tồn tại." });
        }

        // Kiểm tra xem invoiceId có khớp với invoiceNumber không
        if (currentInvoice.invoiceNumber !== invoiceId) {
            return res.status(400).json({
                message: "ID hóa đơn không khớp với số hóa đơn.",
            });
        }

        // Tạo chi tiết hóa đơn
        const newInvoiceDetail = new InvoiceDetail({
            invoice: invoiceId, 
            trip,
            quantity,
            unitPrice,
            totalPrice: quantity * unitPrice, // Tính tổng giá cho chi tiết hóa đơn
        });

        const invoiceDetail = await newInvoiceDetail.save();

        // Cập nhật danh sách chi tiết hóa đơn trong hóa đơn
        currentInvoice.invoiceDetails.push(invoiceDetail._id);
        await currentInvoice.save();

        return res.status(201).json({ invoiceDetail });
    } catch (err) {
        return res.status(500).json({ message: `Lỗi khi tạo chi tiết hóa đơn: ${err.message}` });
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
