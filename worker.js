import { parentPort } from 'worker_threads';

parentPort.on('message', (message) => {
  console.log(message);

  innnnnfiniteLoop();
  parentPort.postMessage('Worker received message');
});

const innnnnfiniteLoop = () => {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
};

export default innnnnfiniteLoop;
