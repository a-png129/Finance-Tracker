import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import routes from "./routes/index.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors()); // to make more secure later, only allow from specific port
app.use(express.json()); // parse incoming JSON payloads
app.use(express.urlencoded({ extended: true })); // body parser

// mount the router
app.use("/api", routes);

// // catch-all for unmatched requests
// app.use("*", (req, res) => {
//   res.status(404).json({
//     message: "Route not found",
//   });
// });

// start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
