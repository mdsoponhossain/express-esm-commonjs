import { ObjectId } from 'mongodb';
export const patchUserControllerFunc = (collection) => {
    return async (req, res) => {

        const result = await collection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
        res.send(result)

    }
};
