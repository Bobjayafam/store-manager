import express from "express";
const router = express.Router();

const products = [];

router.post("/", (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description
  };
  products.push(product);
  res.status(201).json({
    success: true,
    message: "product added to store"
  });
});

export default router;
