const express = require("express");
const { productModel } = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const data = await productModel.find()
    .populate({ path: "category_id" })
    .lean()
    .exec();
  res.status(200).send(data);
});

productRouter.post("/", async (req, res) => {
  try {
    let request = req.body;
    const data = await productModel.create(request);
    res.status(201).send({message:"Data Added Succesfully"});
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding product.");
  }
});

productRouter.get("/:id", async (req, res) => {
  let { id } = req.params;
  const data = await productModel.find({ _id: id }).lean().exec();
  res.status(200).send(data);
});

productRouter.patch("/:id", async (req, res) => {
  let { id } = req.params;

  const data = await productModel.findByIdAndUpdate(id, req.body, {
    new: true,
  })
    .lean()
    .exec();

  res.status(200).send(data);
});

productRouter.delete("/:id", async (req, res) => {
  let { id } = req.params;

  const data = await productModel.findByIdAndDelete(id).lean().exec();

  res.status(200).send(data);
});

module.exports = {
  productRouter,
};
