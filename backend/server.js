import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import routes from "./routes/appController"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors()); // to make more secure later, only allow from specific port
// CORS: cross-origin resource sharing
// eg. allows frontend running on port 3000 to call backend running on port 5000
app.use(express.json()); // parse incoming JSON payloads
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.use("*", (req, res) => {
  res.status(404).json({
    status: "404 Not Found",
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
