const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const userRoute = require('./routes/UserRoute')
const categoryRoute = require('./routes/CategoryRotes')
const itemsRoute = require('./routes/itemsManageRoute').router
const useridRoute = require('./routes/UseridRoutes')

mongoose.connect('mongodb+srv://hritik:hritikpassword@cluster0.ibo9z.mongodb.net/users?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection

db.on('error', (err)=>{
  console.log(err);
})

db.once('open', () => {
  console.log('Database connected');
})


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const port = process.env.PORT||3000

app.listen(port, () => {
  console.log('server is running')
})


app.use('/api/user', userRoute)
app.use('/api/category', categoryRoute)
app.use('/api/item', itemsRoute)
app.use('/api/userid', useridRoute)







// let express = require('express');
// let app = express();
// let apiRoutes = require('./router');
// let bodyParser = require('body-parser');
// let mongoose = require('mongoose');
// const { use } = require('./router');

// app.use('/api', apiRoutes);

// var port = process.env.PORT||8080;

// app.get('/', (req, res)=>{
//     return res.send("welcome to express");
// });

// app.listen(port, function(){
//     console.log("running on port" + port);
// });

// app,use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use(bodyParser.json());

// const dbPath = 'mongodb+srv://hritik:hritikpassword@cluster0.ibo9z.mongodb.net/users?retryWrites=true&w=majority';
//  const options = {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,}
// const mongo = mongoose.connect(dbPath, options);
// mongo.then(()=>{
//     console.log('connected');
// }, error => {
//     console.error(error, 'error');
    
// });


 


