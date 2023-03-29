const express = require("express");
const ProductDetails = require("../model/product.model");
const Category = require("../model/category.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await ProductDetails.find()
    .populate({ path: "category_id" })
    .lean()
    .exec();
  res.status(200).send(data);
});

router.post("/", async (req, res) => {
  let request = req.body;
  const data = await ProductDetails.create(request);

  res.status(201).send(data);
});


router.get("/:id", async (req, res) => {
  let { id } = req.params;
  const data = await ProductDetails.find({ _id: id }).lean().exec();
  res.status(200).send(data);
});

router.patch("/:id", async (req, res) => {
  let { id } = req.params;

  const data = await ProductDetails.findByIdAndUpdate(id, req.body, {
    new: true,
  })
    .lean()
    .exec();

  res.status(200).send(data);
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;

  const data = await ProductDetails.findByIdAndDelete(id).lean().exec();

  res.status(200).send(data);
});

module.exports = router;
