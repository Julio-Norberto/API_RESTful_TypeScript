import mongoose from "mongoose";
import config from 'config'

// LOGGER
import Logger from '../config/logger'

async function connect() {
    const dbUri = config.get<string>('dbUri')

    try {

        await mongoose.connect(dbUri)
        Logger.info('Banco conectado com sucesso!')

    } catch(e) {

        Logger.error('Não foi possível conectar')
        Logger.error(`Erro: ${e}`)
        process.exit(1)

    }
}

export default connect