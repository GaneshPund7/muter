const userSchema = require('./user.modal');
const encryptPassword = require('./user.service');

async function getUser(req, res) {
    try {
        const get_user = await userSchema.find();
        return res.status(200).json({ message: "Data fetch successfuly..!", get_user });
    } catch (error) {
        return res.status(404).json("Somthing went wrong..!")
    }
}

async function addUser(req, res) {
    const { userName, email, password} = req.body;
     let encPassword = await encryptPassword(password);
    try {
        if (!userName || !email || !password) {
            return res.status(400).send("All field are required..!");
        } else {
            const addUser = await userSchema.create({ userName, email, password:encPassword });
            return res.status(200).json({ message: "Data added successfuly..!", addUser })
        }
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
}

async function updateUser(req, res) {
    const {id} = req.params;
    if(!id){
        return res.status(400).send("Invalid Id Please try agian");  
    }
    const updateUser = await userSchema.findOneAndUpdate({_id: id}, req.body, {new: true});

    return res.status(200).json("User Updated successfully..!", updateUser);

}
 

async function deleteUser(req, res) {
    const { id } = req.params;
    try{
        await userSchema.findOneAndRemove({_id: id});
        res.status(200).send("User Deleted Successfuly");
    }catch(error){
        return res.status(404).send("Somthing wend wrong")
    }

}

module.exports = { getUser, addUser, updateUser, deleteUser };