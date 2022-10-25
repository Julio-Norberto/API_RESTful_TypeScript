const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.r8k1y3x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    env: 'development'
}