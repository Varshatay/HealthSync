import { Request, Response } from "express";
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const reminder = require('./reminder/reminder')

app.use(bodyParser.json())
app.use('/reminder', reminder)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
