import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const verificarToken = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Token requerido"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            SECRET_KEY
        );

        req.usuario = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Token inválido"
        });

    }
};