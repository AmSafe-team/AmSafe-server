// index.ts
import app from './app';
import { MODE, PORT } from './env';
import http from 'http';
import REDIS_CLIENT from './redis';
import handle_websocket_connection from './chats';

// Create an HTTP server using the Express app
const server = http.createServer(app);

server.listen(PORT, async () => {
    await REDIS_CLIENT.connect();
    if (MODE === "DEV") {
        handle_websocket_connection();
    }
    console.log(`Server is up on ${PORT}`);
});

export default server;
