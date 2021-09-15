const Promotion = require('../models/promotion');
const authenticate = require('../authenticate');
const cors = require('../routes/cors');

const options = (cors.corsWithOptions, (req, res) => res.sendStatus(200))
const getPromotions = (cors.cors, (req, res, next) => {
    Promotion.find()
     .then(promotions => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
       res.json(promotions);
     })
     .catch(err => next(err));
    });

const createPromotion = (cors.corsWithOptions, authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
        Promotion.create(req.body)
        .then(promotion => {
          console.log(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(promotion);
        })
        .catch(err => next(err));
      });

const updatePromotions = (cors.corsWithOptions, authenticate.verifyUser,(req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /promotion");
      });
const deletePromotions = (cors.corsWithOptions, authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
        Promotion.deleteMany()
        .then(response => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(response);
        })
        .catch(err => next(err));
      });  
      
const getPromotionById = (cors.cors, (req, res, next) => {
        Promotion.findById(req.params.promotionId)
        .then(promotion => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(promotion);
        })
        .catch(err => next(err));
        });
    
const createPromotionById = (cors.corsWithOptions, authenticate.verifyUser,(req, res) => {
        res.statusCode = 403;
        res.end(
          `POST operation not supported on /promotions/${req.params.promotionId}`
        );
      });
    
const updatePromotionById = (cors.corsWithOptions, authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
        Promotion.findByIdAndUpdate(req.params.promotionId, {
          $set: req.body
        }, { new: true})
        .then(promotion => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotion);
          })
          .catch(err => next(err));
      });
const deletePromotionById = (cors.corsWithOptions, authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
        Promotion.findByIdAndDelete(req.params.promotionId)
        .then(response => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(response);
        })
        .catch(err => next(err));
    });

module.exports = {
    options,
    getPromotions,
    createPromotion,
    updatePromotions,
    deletePromotions,
    getPromotionById,
    createPromotionById,
    updatePromotionById,
    deletePromotionById
}  ;  