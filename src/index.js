// require("dotenv").config({path: "./env"})

import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({path: "./env"})


connectDB()




/*
import express from "express";

const app = express()

// Database connection
// IIFE
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // After successfully connecting to the database, we will see listeners in the next line
        app.on("error", (error) => {
            console.log("ERROR: ", error)
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/