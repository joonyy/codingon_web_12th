let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function salarySum(salaries){
  let total = 0;
  for(let key of Object.values(salaries)) total += key;
  return total;
}

console.log(salarySum(salaries));