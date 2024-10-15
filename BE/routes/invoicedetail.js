const invoiceDetailController = require("../controllers/invoiceDetailController");

const router = require("express").Router();

//GET ALL INVOICE DETAILS
router.get("/", invoiceDetailController.getAllInvoiceDetails);

//CREATE INVOICE DETAIL
router.post("/create", invoiceDetailController.createInvoiceDetail);

// Get invoice detail by invoice id
router.get("/:id", invoiceDetailController.getInvoiceDetailByInvoiceId);

// Tăng id tự động cho invoice khi tạo mới theo dạng INV + Ngày tháng năm + số thứ tự
router.get("/generateInvoiceDetailNumber", invoiceDetailController.generateInvoiceDetailNumber);

module.exports = router;
