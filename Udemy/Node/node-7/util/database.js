const { MongoClient, ServerApiVersion } = require('mongodb');
let _db;
// require('dotenv').config()
const uri = "mongodb+srv://danielborbolla88:danielborbolla123@cluster0.7ld3vhe.mongodb.net/?retryWrites=true&w=majority"
// const uri = process.env.DATABASE_URL

const mongoConnect = (callback) => {
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  mongoClient.connect(process.env.DATABASE_URL)
    .then(client => {
      console.log('connected')
      _db = client.db()
      callback(client)
    })
    .catch(err => {
      console.log(err);
      throw err
    })
}
const getDB = () => {
  if (_db) {
    return _db
  }
  throw 'No database Found'
} 

exports.mongoConnect = mongoConnect
exports.getDB = getDB