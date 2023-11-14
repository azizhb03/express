const express = require("express");




const productRouter = express.Router();

productRouter.get("/test", require("../controllers/product.controler").test )

module.exports = productRouter;
