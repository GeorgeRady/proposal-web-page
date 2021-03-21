const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');
const url = 'mongodb://localhost:27017/';
const dbname = 'Lab';
MongoClient.connect(url, (err, client) => {
 assert.equal(err,null);
 console.log('Connected correctly to server');
 const db = client.db(dbname);
 dboper.insertDocument(db, { name: "QTP", description: "MIMO"},
 "processes", (result) => {
 console.log("Insert Document:\n", result.ops);
 dboper.findDocuments(db, "processes", (docs) => {
 console.log("Found Documents:\n", docs);
 dboper.updateDocument(db, { name: "QTP" },
 { description: "MIMO System" }, "processes",
 (result) => {
 console.log("Updated Document:\n", result.result);
 dboper.findDocuments(db, "processes", (docs) => {
 console.log("Found Updated Documents:\n", docs);
 db.dropCollection("processes", (result) => {
 console.log("Dropped Collection: ", result);
 client.close();
 });
 });
 });
 });
 });
});