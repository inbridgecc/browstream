import { Browstream } from '../src';

// Initialize the client
const client = new Browstream({
  server: {
    url: 'http://127.0.0.1:8080',
    key: '1234567890',
  },
});
