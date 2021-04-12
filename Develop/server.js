const express = require("express");
const htmlR = require("./routes/htmlR");
const apiR = require("./routes/apiR");

const app = express();
const port = process.env.port || 1209;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/api", apiR);
app.use("/", htmlR);

app.listen(port,()=> console.log(`Listening on PORT : ${port}`));