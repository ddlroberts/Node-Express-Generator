const express = require("express");
const promotionRouter = express.Router();
const PromotionsController = require('../controllers/promotionController');

promotionRouter.route("/")
.options(PromotionsController.options)
.get(PromotionsController.getPromotions)
.post(PromotionsController.createPromotion)
.put(PromotionsController.updatePromotions)
.delete(PromotionsController.deletePromotions);

promotionRouter.route("/:promotionId")
.options(PromotionsController.options)
.get(PromotionsController.getPromotionById)
.post(PromotionsController.createPromotionById)
.put(PromotionsController.updatePromotionById)
.delete(PromotionsController.deletePromotionById);

module.exports = promotionRouter;
