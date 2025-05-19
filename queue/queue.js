const Queue = require('bull');
require('dotenv').config();

const estimationQueue = new Queue('estimation', {
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
  },
});

module.exports = estimationQueue;

//esto maneja que cada vez que se le pide a workers q estime la estimacion se mete a una fila fifo que dsps se pasa al processor.js