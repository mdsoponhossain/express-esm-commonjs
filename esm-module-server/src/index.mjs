import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { userRouterFunc } from './user/routes/userRoutes.mjs';
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());



const uri = "mongodb://localhost:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const database = client.db("esm_module_DB");
        // routes:
        app.use('/user', userRouterFunc(database))
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.log(err)
    }
}
run().catch(console.dir);








app.all('*', (req, res, next) => {
    const error = new Error(`Your requested URL [${req.url}] invalid...`);
    next(error);
});


app.use((error, req, res, next) => {
    res.send(error.message)
})
app.listen(port, () => {
    console.log(`esm module server is runing on ${port} ...`)
})