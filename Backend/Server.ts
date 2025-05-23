import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import { initSocket } from './Sockets';

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.get('/', (req, res) => res.send('Chat server is running'));

// Initialize Socket.io
initSocket(server);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
