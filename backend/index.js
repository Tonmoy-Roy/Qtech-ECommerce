require('dotenv').config()
const express = require('express')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@analytics-dev.sfhjnki.mongodb.net/?retryWrites=true&w=majority&appName=analytics-dev`;

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const ProductsCollection = client.db('QtechProducts').collection('productlist');

    app.get('/productlist', async (req, res) => {
      const result = await ProductsCollection.find().toArray();
      res.send(result);
    })

    app.get('/productlist/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      const result = await ProductsCollection.findOne({ id: id });
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Qtech server is running!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})