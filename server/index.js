import express from 'express';
import cors from 'cors';
import http from 'http';
import weatherRoutes from './routes/weather.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const __dirname = path.resolve();

app.use(cors());


// Server Setup
const port = process.env.PORT || 5000
http.createServer(app).listen(port, ()=>{
    console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`)
});


app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/', weatherRoutes);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});