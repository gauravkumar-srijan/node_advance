import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.listen(process.env.PORT || 8080, () => {
  console.log("listening on port", process.env.PORT);
});
