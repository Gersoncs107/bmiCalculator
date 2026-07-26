const calculateBMI = (height: number, weight: number): string => {
  const heightInMeters = height / 100; // Convert height from cm to meters
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2);
};

console.log(calculateBMI(180, 74)); // Example usage: height in cm, weight in kg