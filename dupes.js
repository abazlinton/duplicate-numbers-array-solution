var arrayTasks = require('./array_tasks.js');

var arr = [1, 2, 3, 4, 4, 5, 5, 5, 1, 1];

for (var i = 0; i < 20000; i++){
  arr.push(Math.floor((Math.random() * 500) + 1));
}

arr

var res = arrayTasks.findDuplicates(arr);

var counts = {}; 

var dupes1 = arr.filter(function (item) {
  if (!counts[item]) {
    counts[item] = 1
  } else {
    counts[item] += 1
    if (counts[item] === 2) return true
  }
})/*?.*/

var dupes2 = arr.filter(function (item, i) {
  var restOfArrayIncludesItem = arr.slice(i + 1).includes(item)
  var isFirstInstanceOfItem = arr.indexOf(item) === i
  return restOfArrayIncludesItem && isFirstInstanceOfItem
})/*?.*/

         