const express = require('express');
const route = express.Router()

const services = require('../services/render.js');
const worker_controller = require('../controller/worker_controller.js');
const cust_controller = require('../controller/customer_controller.js');
const comp_controller = require('../controller/company_controller.js');
/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/food_delivery', services.foodRoutes);
route.get('/medicine_delivery', services.medicineRoutes);
route.get('/grocery_delivery',services.groceryRoutes);
route.get('/view_profile',services.viewRoutes);
route.get('/update_profile', services.updateRoutes);
// API
route.get('/fd', worker_controller.find);
route.get('/md', worker_controller.find);
route.get('/gd',comp_controller.find);
route.get('/view',cust_controller.find);
route.put('/update/:id', cust_controller.update);
route.delete('/delete/:id', cust_controller.delete);



module.exports = route