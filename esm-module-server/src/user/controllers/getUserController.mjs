export const getUserControllerFunc = (collection) => {
    return async (req, res) => {
        const result = await collection.find().toArray();
        res.send(result)
    }
};
