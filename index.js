const express = require("express");

const app = express();

app.use(express.json());



app.use("/route", require("./routes/product.routes"));
app.listen(3000, () => {
  console.log("listening on port 3000");
});
