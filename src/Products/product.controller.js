const productModule = require('./product.modal');

async function getProductDetails(req, res) {
    try {
        const productDetails = await productModule.find();
        return res.status(200).json({ message: "Data fetch successfuly..!", productDetails });
    } catch (error) {
        return res.status(404).json("Somthing went wrong..!")
    }
}
async function addProductDetails(req, res) {
    const { productName, price, productQuantity } = req.body;
    try {
        if (!productName || !price || !productQuantity) {
            return res.status(400).send("All field are required..!");
        } else {
            const result = await productModule.create({ productName, price, productQuantity });
            return res.status(200).json({ message: "Data added successfuly..!", result })
        }
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
}
async function updateProductDetails(req, res) {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send("Invalid Id Please try agian");
    }
    const result = await productModule.findOneAndUpdate({ _id: id }, req.body, { new: true });

    return res.status(200).json("Product details Updated successfully..!", result);

}
async function deleteProductDetails(req, res) {
    const { id } = req.params;
    try {
        await productModule.findOneAndRemove({ _id: id });
        res.status(200).send("Product Deleted Successfuly");
    } catch (error) {
        return res.status(404).send("Somthing wend wrong")
    }

}
module.exports = { getProductDetails, addProductDetails, updateProductDetails, deleteProductDetails }