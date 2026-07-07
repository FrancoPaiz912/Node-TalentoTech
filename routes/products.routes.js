import { Router } from "express";
import * as productsController from "../controllers/products.controller.js";
import { verificarToken } from "../middlewares/auth.middleware.js";

const router = Router();


router.get(
    "/",
    verificarToken,
    productsController.obtenerProductos
);


router.get(
    "/:id",
    verificarToken,
    productsController.obtenerProductoPorId
);


router.post(
    "/create",
    verificarToken,
    productsController.crearProducto
);


router.delete(
    "/:id",
    verificarToken,
    productsController.eliminarProducto
);

export default router;