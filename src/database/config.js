import { MongoClient } from "mongodb"
import dotenv from 'dotenv'

dotenv.config()

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const dbName = process.env.DB_NAME

const client = new MongoClient(connectionString)

let conn

try {
    conn = await client.connect()
} catch (e) {
    console.error(e)
}

let db = conn.db(dbName)

export default db