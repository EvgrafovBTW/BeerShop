var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.send("workin n shit");
})

module.exports = router;