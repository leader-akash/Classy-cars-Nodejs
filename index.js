const express = require('express');
const { connectMongoDb } = require('./connection');
const carRouter = require('./routes/carRoutes')
const app = express();
const PORT = 5003;

//connectiion
connectMongoDb('mongodb://127.0.0.1:27017/classy-cars-backend')
    .then(() => console.log('mongodb Connected'))
    .catch((err) => console.log('connection failed while connecting to mongodb', err));

//*****middleware plugins */
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//router

app.use('/api/car', carRouter)

// app.use
app.listen(PORT, () => console.log(`server started at port, ${PORT}`))