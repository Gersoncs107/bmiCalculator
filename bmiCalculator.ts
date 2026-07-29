const calculateBMI = (height: number, weight: number): string => {
  const heightInMeters = height / 100; // Convert height from cm to meters
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmiResult = bmi.toFixed(2); // Round to 2 decimal places

  if (bmi < 18.5) {
    return `BMI: ${bmiResult} - Underweight`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return `BMI: ${bmiResult} - Normal range`;
  } else if (bmi >= 25 && bmi < 29.9) {
    return `BMI: ${bmiResult} - Overweight`;
  } else {
    return `BMI: ${bmiResult} - Obesity`;
  }
};

const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);

console.log(calculateBMI(180, 74)); // Example usage: height in cm, weight in kg