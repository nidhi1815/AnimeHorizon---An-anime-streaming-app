import express, { urlencoded } from "express"

import cookieParser from "cookie-parser"
import cors from "cors"
//routes import
import router from "./routes/user.routes.js"
const app = express()


app.use( cors({
    origin: process.env.CORS_ORIGIN
}))

app.use( express.json({limit : "16kb"}))
app.use( express.urlencoded({extended: true}) )
app.use(express.static("public"))
app.use(cookieParser())





//routes declaration
app.use("/api/v1/user" ,  router)
// app.use("/api/v1/", router)



export { app }
