function range(start, end) {
  if (start === end ) {
    return [start];
  }
  let array = range(start, end - 1);
  array.push(end);
}

console.log(range(7, 11));
