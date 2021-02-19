const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

 const filePath = path.join(__dirname, '../public');

app.use(express.static(filePath));

app.listen(port, () => {
    console.log("The server is live now!!!");
});
