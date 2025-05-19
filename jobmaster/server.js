const express = require('express');
const { createJob, getJob } = require('./jobs');

const app = express();
app.use(express.json());

// POST /job
app.post('/job', async (req, res) => {
  const jobId = await createJob(req.body);
  res.status(202).json({ jobId });
});

// GET /job/:id
app.get('/job/:id', async (req, res) => {
  const job = await getJob(req.params.id);
  if (!job) return res.status(404).json({ error: 'Job not found' });
  res.json(job);
});

// GET /heartbeat
app.get('/heartbeat', (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`JobMaster running on port ${PORT}`);
});

//Esta es la Api que recibe las cosas de nuestro backend (todavia no), hay q conectarla al backend