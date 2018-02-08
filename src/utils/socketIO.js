import io from 'socket.io-client';
// const BACKEND_API = 'https://geo-jumper-backend.herokuapp.com';
const BACKEND_API = 'http://localhost:3000'; // TODO: remove this

export let socket = null;

export const socketInit = () => {
  const _socket = io(BACKEND_API);
  _socket.emit('join-room');
  socket = _socket;
};


export const getSocket = () => {
  return socket;
};

export const sendMessage = message => {
  socket.emit('send-message', { message });
};
