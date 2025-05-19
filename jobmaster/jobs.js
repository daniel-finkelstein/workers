const estimationQueue = require('../queue/queue');

async function createJob(data) {
  try {
    const job = await estimationQueue.add(data);
    return job.id;
  } catch (err) {
    console.error('❌ Error creando el job:', err);
    throw err;
  }
}

async function getJob(id) {
  try {
    const job = await estimationQueue.getJob(id);
    if (!job) return null;

    const state = await job.getState();
    let result = null;

    try {
      result = await job.finished(); //si termino
    } catch (err) {
      //no ha terminado o frikio
    }

    return {
      id: job.id,
      state,
      data: job.data,
      result
    };
  } catch (err) {
    console.error('❌ Error obteniendo el job:', err);
    return null;
  }
}

module.exports = {
  createJob,
  getJob
};


//aca hice las funciones para crear y get jobs, createJob crear el job (duh) y lo mete a queue, get job lo saca de queue