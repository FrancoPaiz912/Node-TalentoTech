import { db } from "../config/firebase.js";
import {
    collection,
    getDocs,
    getDoc,
    doc,
    setDoc,
    deleteDoc
} from "firebase/firestore";

const productosCollection = collection(db, "productos");

export const obtenerProductos = async () => {
    const productos = await getDocs(productosCollection);

    return productos.docs.map(documento => ({
        id: documento.id,
        ...documento.data()
    }));
};

export const obtenerProductoPorId = async (id) => {
    const punteroProducto = doc(db, "productos", id);

    const producto = await getDoc(punteroProducto);

    if (!producto.exists()) {
        return null;
    }

    return {
        id: producto.id,
        ...producto.data()
    };
};

export const crearProducto = async (producto) => {

    const punteroProducto = doc(db, "productos", producto.id);

    const productoExistente = await getDoc(punteroProducto);

    if (productoExistente.exists()) {
        return null;
    }

    await setDoc(punteroProducto, {
        nombre: producto.nombre,
        precio: producto.precio,
        stock: producto.stock,
        categoria: producto.categoria,
        descripcion: producto.descripcion
    });

    return {
        id: producto.id,
        ...producto
    };
};

export const eliminarProducto = async (id) => {

    const punteroProducto = doc(db, "productos", id);

    const producto = await getDoc(punteroProducto);

    if (!producto.exists()) {
        return false;
    }
    await deleteDoc(punteroProducto);

    return true;
};