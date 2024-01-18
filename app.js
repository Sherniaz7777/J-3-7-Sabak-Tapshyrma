let nums = [4567, 222, 1098, 3455, 7823, 2222, 1090];



let numbers=[nums[2]*2, nums[5]*5, nums[6]*6]
console.log(numbers);


let totalNum=numbers.reduce((total, numbers)=>total+numbers,0)
console.log(totalNum);
