const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'mongo_employees';

async function connect(){

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);

    return db;
}

module.exports = connect;