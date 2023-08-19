import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://lital184:YsI470hkxKXBR3M1@cluster0.pjvyotk.mongodb.net/?retryWrites=true&w=majority`);
    
    await client.connect();
    db = client.db('nvidia');
    cb();
}

export {
    db,
    connectToDb,
};