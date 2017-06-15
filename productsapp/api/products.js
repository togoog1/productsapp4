"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("../db");
var router = express.Router();
router.get('/', function (req, res) {
    db_1.default.db.collection('products').find().toArray().then(function (products) {
        res.json(products);
    });
});
exports.default = router;
