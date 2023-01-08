const router = require('express').Router();
const {updatePersonalInfo} = require('../controllers/profile');

router.post('/PersonalInfo', updatePersonalInfo);


module.exports = router;