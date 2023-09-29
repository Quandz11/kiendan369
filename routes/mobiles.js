var express = require('express');
var router = express.Router();

//hien thi form nhap
router.get('/', (req, res) =>{
    res.render('mobiles/add');
});

//show du lieu
router.post('/', (req, res) =>{
    res.render('mobiles/view', {mobiles : req.body});
});
module.exports = router;