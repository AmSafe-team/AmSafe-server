import { WebSocketServer } from 'ws';
import server from '..';
import { save_msg } from './util';

const handle_websocket_connection = () => {

    const wss = new WebSocketServer({ server });

    wss.on('connection', (ws, request) => {

        const url = new URL(request.url!, `http://${request.headers.host}`);
        const chatroom = url.searchParams.get('chatroom');
        const user = url.searchParams.get('user')


        ws.on('message', async (message) => {
            if (chatroom && user) {
                wss.clients.forEach(
                    client => {
                        if (client != ws) {
                            client.send(message)
                        }
                    })
                try {
                    // @ts-ignore
                    await save_msg(chatroom, String(message), user);
                } catch (err) {
                    console.log(err)
                    ws.send("Error in saving message");
                }
            } else {
                ws.send("No chatroom or user provided")
            }
        });


        ws.on('close', () => {
            console.log('Client disconnected');
        });


        ws.send('Welcome to the WebSocket server!');
    });

}

export default handle_websocket_connection;
