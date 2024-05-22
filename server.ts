// const express = require("express");

import express from "express";
import validateParams from "./src/validation";
import getStats from "./src/middleware";

// const validateParams = require('./src/validation')

// console.log(validateParams);

require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/stats", validateParams, getStats);

app.listen(process.env.PORT, () => {
  console.log(`server started on port: ${process.env.PORT}`);
});
