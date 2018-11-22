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

console.log([1,2,3].myMap(addTwo));


// Array.prototype.myEach222 = function(addTwo) {
//   for (let i = 0; i < this.length; i++) {
//     results.push(addTwo(this[i]));
//   }
// };
