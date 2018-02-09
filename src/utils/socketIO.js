import io from 'socket.io-client';

export let socket = null;

export const socketInit = () => {
  const _socket = io(__API_URL__); // eslint-disable-line
  _socket.emit('join-room');
  socket = _socket;
};


export const getSocket = () => {
  return socket;
};

export const sendMessage = message => {
  socket.emit('send-message', { message });
};
