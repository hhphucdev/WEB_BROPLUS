const middlewareControllers = require("../controllers/middlewareControllers");
const tripController = require('../controllers/tripController');

const router = require('express').Router();

//GET ALL TRIPS
router.get('/', middlewareControllers.verifyToken, tripController.getAllTrips);

//CREATE TRIP
router.post('/', middlewareControllers.verifyToken, tripController.createTrip);

//DELETE TRIP
router.delete('/:id', middlewareControllers.verifyToken, tripController.deleteTrip);

module.exports = router;