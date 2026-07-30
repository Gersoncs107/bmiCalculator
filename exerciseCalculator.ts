interface ExerciseResult {
  days: number;
  trainingDays: number;
  target: number;
  average: number;
  targetReached: boolean;
  rating: number;
  explanation: string;
}

const parseArguments = (args: string[]): { dailyExercises: number[], target: number } => {
  if (args.length < 4) throw new Error("Not enough arguments");

  const values = args.slice(2);

  if (values.some(value => isNaN(Number(value)))) {
    throw new Error("Provided values were not numbers!");
  }

  const numbers = values.map(Number);
  const target = numbers[numbers.length - 1];
  const dailyExercises = numbers.slice(0, -1);

  return { dailyExercises, target };
};

const calculateExercises = (dailyExercises: number[], target: number): ExerciseResult => {
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
};

try {
  const { dailyExercises, target } = parseArguments(process.argv);
  console.log(calculateExercises(dailyExercises, target));
} catch (error: unknown) {
  let errorMessage = "Something went wrong.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}