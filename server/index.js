
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import teamRoutes from './routes/teams.js';
import playerRoutes from './routes/players.js';
import panelRoutes from './routes/panels.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/teams', teamRoutes);
app.use('/players', playerRoutes);
app.use('/panels', panelRoutes);

const CONNECTION_URL = 'mongodb+srv://HuntingGroundsDBAdmin:zHYRdt19zXK2x20Z@hunting-grounds-cluster.dpheu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);