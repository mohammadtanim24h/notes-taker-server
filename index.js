const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//noteTakerAdmin
//TPTGWDgtaRAyi7Jf

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://noteTakerAdmin:TPTGWDgtaRAyi7Jf@cluster0.2lzea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const notesCollection = client.db("notesTaker").collection("notes");

        // get api to read all notes
        // http://localhost:5000/notes
        app.get("/notes", async (req, res) => {
            const q = req.query;
            const cursor = notesCollection.find(q);
            const result = await cursor.toArray();
            res.send(result);
        })

        /*
            body format : {
                "userName": "tom",
                "textData": "no world"
            }
        */

        // post api to create notes
        // http://localhost:5000/note
        app.post("/note", async (req, res) => {
            const data = req.body;
            console.log(data);
            const result = await notesCollection.insertOne(data);
            res.send(result);
        })

        // update notes


        // delete notes
    }
    finally {

    }
}

run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Notes taker server is up and running");
});

app.listen(port, () => {
    console.log("Listening to port", port);
});
