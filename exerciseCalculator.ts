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
  if (args.length > 4) throw new Error("Too many arguments");

  if(isNaN(Number(args[2])) || isNaN(Number(args[3]))) {
    throw new Error("Provided values were not numbers!");
  }
}

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
}

const dailyExercises = process.argv.slice(2, -1).map(Number);
const target = Number(process.argv[process.argv.length - 1]);

console.log(calculateExercises(dailyExercises, target)); // Example usage: daily exercises in hours, target in hours