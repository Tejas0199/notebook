const { createServer } = require('http');

const app = require('./app');
const connectWithDb = require('./modal/db');

const PORT = 4000;
const hostName = '127.0.0.8';



const server = createServer(app);


async function startServer() {
    await connectWithDb()
    server.listen(PORT,hostName,() => {
        console.log(`server started with http://${hostName}:${PORT}`)
    })
}
startServer();