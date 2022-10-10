import app from './server.js'

import mongodb from "mongodb"
import dotenv from "dotenv"
import MoviesDAO from './dao/moviesDAO.js'
/** aysnc function to connect to mongodb clusster */
async function main() {

    dotenv.config() /**
     loading in environment variables* 
     */
    const client = new mongodb.MongoClient(
        process.env.MOVIEREVIEWS_DB_URL
    )
    /**
     creating an instance of mongocleint 
     */
    const port = process.env.PORT || 8000
    try {
        await client.connect()
        await MoviesDAO.injectDB(client)
        app.listen(port, () => {
            console.log('server is running on port:' + port);
        })

    } catch (e) {
        console.error(e);
        process.exit(1)
    }
}

main().catch(console.error);