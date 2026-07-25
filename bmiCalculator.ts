const calculateBMI = (height: number, weight: number): string => {
  const bmi = weight / (height * height);
  return bmi.toFixed(2);
};

console.log(calculateBMI(1.70, 65));