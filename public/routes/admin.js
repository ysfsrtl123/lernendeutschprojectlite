const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminHome');


router.get('/', adminController.getAdminHome);
router.get('/about', adminController.getAdminAbout);
router.get('/ubungen', adminController.getAdminUbungen);
router.post('/ubungen', adminController.postaddword);
router.post("/ubungen/:id", adminController.postDeleteWord);

module.exports = router;
