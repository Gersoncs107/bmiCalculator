const calculateExercises = (dailyExercises: number[], target: number) => {
  const totalDays = dailyExercises.length;
  const trainingDays = dailyExercises.filter(day => day > 0).length;
  const totalHours = dailyExercises.reduce((sum, hours) => sum + hours, 0);
  const averageHours = totalHours / totalDays;