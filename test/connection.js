const mongoose = require('mongoose')
const mongodb = require('mongodb')

console.log('this is the connection.js file output')

before(async ()=>{
    await mongoose.connect('mongodb://localhost:27100/safekids', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connection to database successful: '); 
    })
    .catch((err) => { console.log('connection not successful: ' + err) })    
})

describe('Database Testing', function(){

    it('Should search a document in collection', async function(){
        // console.log(mongoose.connection.db.listCollections())
        // console.log(mongoose.connection.modelNames())
        // console.log(mongoose.connection.id) 

        var userSchema = new mongoose.Schema({
            email: String,
            password: String,
            firstName: String,
            lastName: String,
            primaryAccount: Boolean,
            phoneNumber:String,
            emailVerified: Boolean
        });

        var deviceSchema = new mongoose.Schema({
            deviceId: String,
            osSpecificUniqueId: String,
            os: String,
            osVersion: String,
            osBuild: String,
            macAddress: String,
            logins: String
        });

        var kidSchema = new mongoose.Schema({
            device: deviceSchema,
            login: String
        });

        var accountSchema = new mongoose.Schema({
            users: userSchema,
            devices: deviceSchema,
            kids: kidSchema
        });

        var accountModel = mongoose.connection.model('account', accountSchema);

        console.log(mongoose.connection.modelNames())
        console.log(mongoose.connection.id)
        console.log(accountModel)
        
        // console.log(accountModel.findOne({ firstName: "Dave" }))
        // console.log(accountModel.findOne({ users: {firstName: "Dave"} }))
   
        // console.log(mongoose.connection.db)

        await accountModel.find().then((res) => {
            console.log(res);
        })

        

    })

})
