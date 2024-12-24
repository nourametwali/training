let largest = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
return largest;
}

function min(numbers) {
let smallest = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i]; 
  }
}
return smallest;
}

const nums = [3, 7, 1, 9, 5, 12];

console.log(max(nums)); 
console.log(min(nums));