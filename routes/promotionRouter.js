const express = require("express");
const promotionRouter = express.Router();
const PromotionsController = require('../controllers/promotionController');

promotionRouter.route("/")
.get(PromotionsController.getPromotions)
.post(PromotionsController.createPromotion)
.put(PromotionsController.updatePromotions)
.delete(PromotionsController.deletePromotions);

promotionRouter.route("/:promotionId")
.get(PromotionsController.getPromotionById)
.post(PromotionsController.createPromotionById)
.put(PromotionsController.updatePromotionById)
.delete(PromotionsController.deletePromotionById);

module.exports = promotionRouter;
