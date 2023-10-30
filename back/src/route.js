const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const userController = require("./user/user.controller");

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            done(null, "./uploads");
        },
        filename: (req, file, done) => {
            const ext = path.extname(file.originalname);
            const filename = path.basename(file.originalname, ext) + "_" + Date.now() + ext;
            done(null, filename);
        },
    }),
});

router.post("/signup", upload.single("upload1"), userController.signup);

module.exports = router;
