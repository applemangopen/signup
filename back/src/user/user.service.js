const User = require("./user.entity");

const checkDuplicate = async (id) => {
    const user = await User.findOne({ where: { id } });
    return !!user;
};

const createUser = async (userData) => {
    return await User.create(userData);
};

module.exports = {
    checkDuplicate,
    createUser,
};
