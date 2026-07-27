const calculateExercises = (dailyExercises: number[], target: number) => {
  const totalDays = dailyExercises.length;
  const trainingDays = dailyExercises.filter(day => day > 0).length;
  const totalHours = dailyExercises.reduce((sum, hours) => sum + hours, 0);
  const averageHours = totalHours / totalDays;
  const targetReached = averageHours >= target;
  let rating: number;
  let explanation: string;

  if (targetReached) {
    rating = 3;
    explanation = "Excellent! You have met your target.";
  } else if (averageHours >= target * 0.8) {
    rating = 2;
    explanation = "Not too bad! You could be better.";
  } else {
    rating = 1;
    explanation = "Keep trying! You need to improve your exercise habits.";
  }

  return {
    days: totalDays,
    trainingDays: trainingDays,
    target: target,
    average: averageHours,
    targetReached: targetReached,
    rating: rating,
    explanation: explanation
  };
}
console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2)); // Example usage: daily exercises in hours, target in hours