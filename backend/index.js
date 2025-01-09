import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js"; 

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use(cors());

// app.use(cors(
//     {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     }
// ));

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello World!");
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to MongoDB");
    app.listen(PORT, () => {
      console.log(
        `Server is running on http://localhost:${PORT} (App is listening to port: ${PORT})`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
