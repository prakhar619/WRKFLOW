import Server from "./Server.mjs";

import mongoose from "mongoose";

let user = "prakharNode";
let password = "qwer1234";
let dbName = "testUser"

//Also specify database here
//mongodb+srv://prakharLinux:<db_password>@atlascluster.qt3ml3u.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster
const uri = `mongodb+srv://${user}:${password}@atlascluster.qt3ml3u.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=AtlasCluster`;


async function DBConnect()
{
    await mongoose.connect(uri).then( ()=>{console.log('Database Connection Successful')}).catch((err) => {console.log("Database Connection Failed")});
    const db = mongoose.connection;
    Server(db);
}

DBConnect();

process.on('SIGINT', () => {
        mongoose.connection.close();
});





