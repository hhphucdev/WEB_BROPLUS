const invoiceController = require('../controllers/invoiceController');

const router = require('express').Router();

//GET ALL INVOICES
router.get('/', invoiceController.getAllInvoices);

//CREATE INVOICE
router.post('/create', invoiceController.createInvoice);

//GET INVOICE BY ID
router.get('/:id', invoiceController.getInvoiceByTripId);

//GET INVOICE BY USER ID
router.get('/user/:id', invoiceController.getInvoiceByUserId);

// Tăng id tự động cho invoice khi tạo mới theo dạng INV + Ngày tháng năm + số thứ tự
router.get('/generateInvoiceNumber', invoiceController.generateInvoiceNumber);

module.exports = router;