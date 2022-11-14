import 'dotenv/config';
import './db/connection.js'
import express from 'express'
import router from './routes/index.js';
import cors from 'cors'

const app = express()


// CORS
app.use(cors({
    origin: process.env.ORIGIN_URL
}))

app.use(express.json())
app.use('/api', router)


const PORT =  process.env.PORT || 3001

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`))