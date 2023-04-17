var router = require("express").Router();
var testcontroller = require('../controller/test.controller');

router.get('/greetings', testcontroller.greetings);
router.get('/greetings_1', testcontroller.greetings_1);





module.exports = router;
