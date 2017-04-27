const uniq = (array) => {
  let returnArray = [];
  for (let i = 0; i < array.length; i++){
    if (!returnArray.includes(array[i])) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
};


const twoSum = (array) => {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        returnArray.push([i, j]);
      }
    }
  }
  return returnArray;
};

function transpose(array) {
  let returnArray = [];
  let copy = array.slice();
  while (copy[0].length !== 0){
    var subArray = [];
    for (let i = 0; i < array.length; i++) {
      subArray.push(array[i].shift());
    }
    returnArray.push(subArray);
  }
  return returnArray;
}

function myEach(array, callback) {
  for (let i = 0; i < array.length; i++){
    callback(array[i]);
  }
}

function myMap(array, callback) {
  let returnArray = [];
  myEach(array, (el) =>returnArray.push(callback(el)));
  return returnArray;
}


function myInject(array, callback, accum = null) {
  let copy = array.slice();
  let accumulator = accum;
  if (accum === null){
    accumulator = copy.shift();
  }
  myEach(copy, (element)=>{
    accumulator = callback(accumulator, element);
    }
  );
  console.log(accumulator);
  return accumulator;
}

function bubbleSort(array) {
  let count = 1;
  while(count > 0){
    count = 0;
    for (let i=1; i<array.length; i++){
      if (array[i-1] > array[i]) {
        let temp = array[i];
        array[i] = array[i-1];
        array[i-1] = temp;
        count++;
      }
    }
  }
  return array;
}

function subStrings(string){
  let subs = [];
  for (let i=0; i < string.length; i++){
    for (let j=i+1; j <= string.length; j++){
      if(!subs.includes(string.slice(i,j))){
        subs.push(string.slice(i,j));
      }
    }
  }
  return subs;
}

function fibonacci(num) {
  if (num <= 0 ) { return []; }
  if (num === 1 ) { return [1]; }
  if (num === 2) { return [1,1]; }

  let fib = fibonacci(num -1);
  fib.push(fib[fib.length-1] + fib[fib.length-2]);
  return fib;
}

function binarySearch(array, target){
  if (array.length === 1 && target !== array[0]) { return null; }
  let midpoint = Math.floor(array.length/2);
  if (target === array[midpoint]){ return midpoint; }
  let left = array.slice(0,midpoint);
  let right = array.slice(midpoint);
  if (target < array[midpoint]) { return binarySearch(left, target); }
  if (target > array[midpoint]) {
    let result = binarySearch(right, target);
    if (result === null) {
      return null;
    } else {
      return result + midpoint;
    }
  }
}

function mergeSort(array){
  if (array.length === 1) { return array; }
  if (array.length === 0) { return []; }
  let midpoint = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0,midpoint));
  let right = mergeSort(array.slice(midpoint));

  return combine(left, right);
}

function combine(left, right){
  let result = [];
  while (true){
    if (left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
    if (left.length === 0 || right.length === 0) {
      break;
    }
  }
  result = result.concat(left);
  result = result.concat(right);
  return result;
}

function subsets(array){
  if (array.length === 0 ) { return [[]]; }
  let answer = [];
  let last = array.pop();
  // last = 3
  //array = [1,2]
  //subset(array) = [[],[1],[1,2],[2]]
  let subs = subsets(array);
  subs.forEach((el)=>{answer.push(el.concat([last]));});
  return answer.concat(subs);
}

function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}`;
};
