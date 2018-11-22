Array.prototype.uniq = function() {
  let result = [];
  this.forEach ( el => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

Array.prototype.twosum = function() {
  let result = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

// console.log([1, -1, 2, 3, 4, -2].twosum());

Array.prototype.transpose = function() {
  let result = [];
  [...Array(this[0].length).keys()].forEach ( i => {
    let subarray = [];
    [...Array(this.length).keys()].forEach ( j => {
      subarray.push(this[j][i]);
    });
    result.push(subarray);
  });
  return result;
};

// console.log([['a', 'b', 'c'],['d', 'e', 'f']].transpose());
