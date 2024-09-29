const Invoice = require("../models/Invoice");
const mongoose = require("mongoose");

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

  //CREATE INVOICE
   createInvoice : async (req, res) => {
    try {
      const { invoiceNumber, user, trip, totalAmount, status, paymentMethod, notes } = req.body;
  
      const newInvoice = new Invoice({
        invoiceNumber,
        user,
        trip,
        totalAmount,
        status,
        paymentMethod,
        notes,
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
        const invoices = await Invoice.find({ user: req.params.id });
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
