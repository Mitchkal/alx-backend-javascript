const express = require('express');
const AppController = require('../AppController');
const StudentsController = require('../StudentsController');

const router = express.Router();

// create the routes

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
