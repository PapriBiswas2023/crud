import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import loginRoutes from './routes/loginRoutes.js';
import registrationRoutes from './routes/registrationRoutes.js';



const app= express()
app.use(cors({
    origin : process.env.CORS_ORIGIN
}))
//app.use(express.json({limit : "16kb"}))
//app.use(express.urlencoded({extended: true, limit:"16kb"}))
//app.use(express.static("image_folder"))
app.use(cookieParser())

app.use('/regrouter', registrationRoutes);
app.use('/loginrouter', loginRoutes);

export {app}