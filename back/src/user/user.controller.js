const userService = require("./user.service");

const signup = async (req, res) => {
    const { id, pw, name } = req.body;
    const { filename, originalname } = req.file;

    const isDuplicate = await userService.checkDuplicate(id);

    if (isDuplicate) {
        return res.status(400).send({ message: "Duplicate user" });
    }

    await userService.createUser({
        id,
        pw,
        name,
        provider: "local",
        image: `/uploads/${filename}`,
        original_filename: originalname,
    });

    res.status(201).json({ message: "회원가입 성공 추카추카!", success: true });
};

module.exports = {
    signup,
};
