import * as productsModel from "../models/products.model.js";

export const obtenerProductos = async () => {
    return await productsModel.obtenerProductos();
};

export const obtenerProductoPorId = async (id) => {
    return await productsModel.obtenerProductoPorId(id);
};

export const crearProducto = async (producto) => {
    return await productsModel.crearProducto(producto);
};

export const eliminarProducto = async (id) => {
    return await productsModel.eliminarProducto(id);
};