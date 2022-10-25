// .ENV
require('dotenv').config()

import express, { Request, Response } from 'express'
import config from 'config'

const app = express()

// MIDDLEWARE JSON
app.use(express.json())

// DATABASE
import db from '../config/db'

// ROUTES
import router from './routes'

// LOGGER
import Logger from '../config/logger'

// MIDDLEWARE
import morganMiddleware from './middleware/morganMiddleware'

app.use(morganMiddleware)
app.use('/api/', router)

// PORT CONFIG
const port = config.get<number>('port')

app.listen(port, async () => {

    await db()

    Logger.info(`Servidor rodando na porta: ${port}`)

})