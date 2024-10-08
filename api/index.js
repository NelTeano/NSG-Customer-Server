import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';


// DATABASE CONNECTION
import { initDatabase } from './database.js'

// ROUTES
import ordersRoute from '../routes/ordersRoute.js';

const app = express();
dotenv.config();      // ACCESS .ENV 
initDatabase();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));
app.use(cors({
    origin: [
        'http://localhost:1020',
    ],  
    // THE HTTP(ORIGIN) THAT WILL ALLOW TO ACCESS THE ROUTES
    credentials: true,
}));


const PORT = 3001;

app.get("/", (req, res) => res.send(`Express on Vercel`));

app.listen(PORT, () => console.log(`Server ready on port http://localhost:${PORT}`));


// USE ROUTES
app.use('/api', ordersRoute);

export default app;