Array.prototype.bubbleSort = function() {
  let notSorted = true;
  while (notSorted) {
    notSorted = false;
    for (let i = 0; i+1 < this.length; i++) {
      for (let j = i+1; j < this.length; j++) {
        if (this[j] < this[i]) {
          notSorted = true;
          let temp = this[j];
          this[j] = this[i];
          this[i] = temp;
        }
      }
    }
  }
  return this;
};

// console.log([5,4,3,2,1].bubbleSort());


String.prototype.substrings = function() {
  let results = [];
  for (let i = 0; i+1 < this.length; i++) {
    for (let j = i+1; j < this.length; j++) {
      results.push(this.slice(i, j+1));
    }
  }
  return results;
};

console.log("elephant".substrings());
