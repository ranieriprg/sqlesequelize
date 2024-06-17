const express = require("express");
const conn = require("./db/conn");
const { engine } = require("express-handlebars");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static("public"));

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.set("view engine", "handlebars");
app.use(express.static("public"));

const port = 3000;

app.use("/", (req, res) => {
  res.send("hello selequelize");
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Servidor rodando na porta: ${port}`);
});
