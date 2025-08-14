const BACKEND_URL = import.meta.env.PROD 
  ? "https://domino-martinique.onrender.com"  // Render URL
  : "http://localhost:3000";

const socket = io(BACKEND_URL, {
  transports: ['websocket'],
  autoConnect: true,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5
});