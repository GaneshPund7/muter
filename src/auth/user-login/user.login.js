const userModal = require("../../user/user.modal");
const { decryptpassword, createToken } = require("../../user/user.service");
const seckretKey = "GaneshBhai";

async function verifyUser(req, res) {
    const { email, password } = req.body;

    try {
        const getUser = await userModal.findOne({ email });
        if (!getUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const decPassword = await decryptpassword(password, getUser.password);
        if (decPassword) {
            const token = await createToken(req.body, seckretKey);
            return res.status(200).json({ message: "Login successfully..!", token });
        }
        return res.status(400).json({ message: "Password is not match" });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

module.exports = verifyUser;