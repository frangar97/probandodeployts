import cors from 'cors';
import express from 'express';
import { Pool } from 'pg';
import { PORT, DB_CONNECTION } from './config';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
    connectionString: DB_CONNECTION
});

app.get("/", async (req, res) => {
    const response = await pool.query("SELECT * FROM Usuario");
    res.json(response.rows);
});

app.listen(PORT, () => console.log(`Servidor iniciado en puerto ${PORT}`))