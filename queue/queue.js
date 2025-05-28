const Queue = require('bull');
const estimationQueue = new Queue('estimation', {
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: 6379,
  },
});
module.exports = estimationQueue;
