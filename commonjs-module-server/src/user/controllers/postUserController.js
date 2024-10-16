const postUserControllerFunc = (collection) => {
    return async (req, res) => {
        const result = await collection.insertOne(req.body);
        res.send(result)
    }
};
module.exports = postUserControllerFunc;