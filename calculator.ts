export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = /[,\n]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].substring(2));
    numbers = parts[1];
  }

  const numsArray = numbers.split(delimiter).map((num) => {
    const number = parseInt(num, 10);
    if (number < 0) {
      throw new Error(`negative numbers not allowed: ${num}`);
    }
    return number;
  });

  return numsArray.reduce((sum, num) => sum + num, 0);
}
