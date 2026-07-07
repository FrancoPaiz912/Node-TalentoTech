import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware global
app.use(cors());
app.use(bodyParser.json());

// Rutas base
app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({ mensaje: "Servidor funcionando" });
});

app.use((req, res) => {
    res.status(404).json({
        mensaje: "Ruta no encontrada"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});