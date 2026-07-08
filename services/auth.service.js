import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const login = (email, password) => {

    if (email === "admin@gmail.com" && password === "123456") {
       const token = jwt.sign(
        { email },
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    return {
        message: "Login exitoso",
        token: `${token}`
    };
    }
    else {
 return null;
    }

    
};