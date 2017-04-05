/*jshint esversion: 6*/

function quickSort(arr) {
  var smallArr = [];
  var bigArr = [];
  var pivot = arr[0];
  var iGiveUp = null;

  if(arr.length <= 1) {
    return arr;


  } else {
    for(var i = 0; i < arr.length - 1; i++) {
      if(arr[i + 1] <= arr[0]) {
        smallArr.push(arr[i + 1]);
      } else {
        bigArr.push(arr[i + 1]);
      }
    }
  }

  // console.log('what happens here?');
  // // smallArr.concat(bigArr);
  // smallArr.push(arr[0]);
  console.log('pivot', arr[0]);
  console.log('small ', smallArr);
  console.log('big ', bigArr);
  // console.log('test2 ', quickSort(smallArr).concat(quickSort(bigArr)));
  iGiveUp = quickSort(smallArr).concat(pivot, quickSort(bigArr));
  return iGiveUp;
}


module.exports = quickSort;