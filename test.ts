import { MongoClient } from 'mongodb';

// !!! IMPORTANT !!!
// Replace <username> and <password> with your database user credentials
// (The ones from the "Database Access" section in Atlas, NOT your Atlas login)
const uri = "mongodb+srv://jhapriiyaa2104_db_user:a0jsOl1nMa5ZJz1h@cluster0.pev0wlz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tls=true";
// Create the client with the new option
const client = new MongoClient(uri, {
    family: 4, // <-- ADD THIS LINE
});

async function run() {
    try {
        console.log("Attempting connect with 'family: 4' setting...");
        await client.connect();
        console.log("✅ SUCCESS! Connected successfully!"); // <-- This is what we hope to see
    } catch (err) {
        console.error("❌ FAILED TO CONNECT:");
        console.error(err);
    } finally {
        await client.close();
        console.log("Connection closed.");
    }
}
run();