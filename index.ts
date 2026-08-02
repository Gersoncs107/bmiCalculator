import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
  const { height, weight } = _req.query;

  if (!height || !weight) {
    return res.status(400).json({ error: 'Height and weight are required' });
  }

  const heightNumber = Number(height);
  const weightNumber = Number(weight);

  if (isNaN(heightNumber) || isNaN(weightNumber)) {
    return res.status(400).json({ error: 'Invalid height or weight values' });
  }

  const bmi = calculateBmi(heightNumber, weightNumber);

  return res.json({
    height: heightNumber,
    weight: weightNumber,
    bmi
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});