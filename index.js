const express = require('express');
const app = express();
const multer = require('multer')
const upload = multer({ dest: "uploads/" })
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretkey = "kjfskdj6^ksj98982hjk;.,-sgd434!"
require('dotenv').config()
app.use(express.json());
app.use(cors());



app.use(express.json());



mongoose.connect(process.env.DB).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("db and server is running on port 4001 ")
  })
});