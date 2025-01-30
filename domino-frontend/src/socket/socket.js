import { io } from 'socket.io-client';

const BACKEND_URL = import.meta.env.PROD 
  ? 'https://hidden-meadow-68185-d2168c8f325d.herokuapp.com'
  : 'http://localhost:3000';

const socket = io(BACKEND_URL, {
  withCredentials: true,
  transports: ['websocket', 'polling']
});

export default socket;