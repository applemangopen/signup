const { sequelize } = require("./src/entity");
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./src/user/user.route");

app.use(cors());
app.use(express.json());

sequelize
    .authenticate()
    .then(() => {
        console.log("Database connected.");
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
    });

sequelize.sync({ force: true }).then(() => {
    console.log("Database & tables created!");
});

app.use("/user", userRoutes);

app.listen(4000, () => {
    console.log("Back start!");
});
