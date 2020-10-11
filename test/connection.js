const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connection.once('open', function(){
//     console.log('Connection to database is made');
// }).on('error', function(error){
//     console.log('Error Occured: ' + error)
// })

before((done)=>{
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connection to database successful: ');
        done(); 
    })
    .catch((err) => { console.log('connection not successful: ' + err) })    
})

// beforeEach((done) => {
    // mongoose.connection.collections.mariochars.drop(() => {
    //     done();
    // })
// })