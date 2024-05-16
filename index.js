import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.render("thongtin.ejs");
});

app.post("/tiepnhansanh", (req, res) => {
  res.render("lobby.ejs");
});

app.post("/thongtin", (req, res) => {
  res.render("thongtin.ejs");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
