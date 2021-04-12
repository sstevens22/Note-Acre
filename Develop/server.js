const express = require("express");
const htmlR = require("./routes/htmlR");
const apiR = require("./routes/apiR");

const app = express();
const PORT = process.env.PORT || 1209;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/api", apiR);
app.use("/", htmlR);

app.listen(PORT,()=> console.log(`Listening on PORT : ${PORT}`));