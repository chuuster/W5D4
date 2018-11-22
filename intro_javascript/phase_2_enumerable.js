Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function addExclamation(el) {
  console.log(el + "!");
}

// console.log(["a", "b", "c"].myEach(addExclamation));

Array.prototype.myMap = function(mapFunction) {
  const result = [];
  this.myEach(i => {
    result.push(mapFunction(i));
  });
  return result;
};

function addTwo(el) {
  return (el + 2);
}

// console.log([1,2,3].myMap(addTwo));

Array.prototype.myReduce = function(callback_function, initial_value = this.shift()) {
  let acc = initial_value;
  this.myEach (el => {
    acc = callback_function(acc, el);
  });
  return acc;
};

function sumTogether(acc, el) {
  return acc + el;
}

console.log([1, 2, 3].myReduce(sumTogether));
