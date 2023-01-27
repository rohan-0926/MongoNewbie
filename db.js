const { MongoClient } = require('mongodb');

let dbConnection
let uri = 'mongodb+srv://Rohankondam:Radhika02@cluster0.x9clp1p.mongodb.net/?retryWrites=true&w=majority'
module.exports = {
    connectToDb : (cb) =>{
        MongoClient.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then((client)=>{
            dbConnection = client.db()
            return cb()
        }).catch(err=>{
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}