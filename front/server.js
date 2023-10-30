const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const axios = require("axios");

app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
nunjucks.configure("views", {
    express: app,
});
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", (req, res) => {
    res.json({ result: "ok" });
});

app.listen(3000, () => {
    console.log("Front Server Start");
});
