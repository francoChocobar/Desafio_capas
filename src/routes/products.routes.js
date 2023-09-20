import { Router } from "express";

import { productsController } from "../controllers/products.controller.js";

const validateFields = (req, res, next) => {
  const productInfo = req.body;
  if (!productInfo.tittle || !productInfo.price) {
    return res.json({ status: "error", message: "campos incompletos" });
  } else {
    next();
  }
};

const router = Router();

router.get("/", productsController.getProducts);
router.get("/:pid", productsController.getProduct);
router.post("/", validateFields, productsController.createProduct);

router.put("/:pid", validateFields, productsController.updateProduct);

router.delete("/:pid", productsController.deleteProduct);

export { router as productsRouter };
