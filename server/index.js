import express from 'express';
import bodyParser  from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
import weatherRoutes from './routes/weather.js';
import path from 'path';

const app = express();

app.use(cors());

app.use('/', weatherRoutes);

// console.log("here index.js", app);

// const CONNECTION_URL = 'mongodb+srv://shosh:qwer1234@cluster0.hrptu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// Server Setup
const port = process.env.PORT || 5000
http.createServer(app).listen(port, ()=>{
    console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`)
});


//app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });