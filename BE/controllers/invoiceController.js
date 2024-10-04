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
  createInvoice: async (req, res) => {
    try {
      const {
        invoiceNumber,
        user,
        trip,
        totalAmount,
        status,
        paymentMethod,
        notes,
        invoiceDetails,
      } = req.body;

      const createdInvoiceDetails = await InvoiceDetail.insertMany(
        invoiceDetails
      );

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

      await newInvoice.save();
      res.status(201).json(newInvoice);
    } catch (error) {
      res.status(400).json({ error: error.message });
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
