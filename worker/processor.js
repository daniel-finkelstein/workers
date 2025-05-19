const estimationQueue = require('../queue/queue');

estimationQueue.process(async (job) => {
  const { userId, purchases } = job.data;

  await new Promise((res) => setTimeout(res, 2000));

  const results = purchases.map(({ symbol, quantity, priceStart, priceEnd }) => {
    const m = (priceEnd - priceStart);
    const nextPrice = priceEnd + m;
    const expectedProfit = (nextPrice - priceEnd) * quantity;
    return { symbol, nextPrice, expectedProfit };
  });

  const total = results.reduce((sum, r) => sum + r.expectedProfit, 0);
  return { userId, results, total };
});

console.log('Worker running...');

//la logica misma de la estimacion lineal