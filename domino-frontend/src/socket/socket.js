// Fichier : socket/socket.js
import { io } from 'socket.io-client';

// Initialisation de la connexion Socket.IO
const socket = io('http://localhost:3000/'); // Remplacez par l'URL de votre backend si nécessaire
//const socket = io('http://147.215.207.243:3001',{
 //   reconnection: true, // Activer la reconnexion automatique
 //   reconnectionAttempts: 5, // Nombre maximal de tentatives de reconnexion
   // reconnectionDelay: 1000, // Délai entre les tentatives (en ms)
  //}); // Remplacez par l'IP locale de votre backend

export default socket;