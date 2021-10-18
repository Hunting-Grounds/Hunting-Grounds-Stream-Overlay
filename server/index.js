
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';

import teamRoutes from './routes/teams.js';
import playerRoutes from './routes/players.js';
import panelRoutes from './routes/panels.js';
import fileRoutes from './routes/file-upload-routes.js';
import bodyParser from 'body-parser';

const __dirname = path.resolve();

const app = express();

app.use(bodyParser.json());
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/teams', teamRoutes);
app.use('/players', playerRoutes);
app.use('/panels', panelRoutes);
app.use('/api', fileRoutes.routes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//const CONNECTION_URL = 'mongodb+srv://HuntingGroundsDBAdmin:zHYRdt19zXK2x20Z@hunting-grounds-cluster.dpheu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const CONNECTION_URL = 'mongodb://localhost:27017/huntingGrounds';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);