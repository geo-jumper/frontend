import io from 'socket.io-client';

export let socket = null;

export const socketInit = () => {
  const _socket = io('http://localhost:3000');
  socket = _socket;
};


export const getSocket = () => {
  return socket;
};

export const sendMessage = message => {
  socket.emit('send-message', { message });
};
