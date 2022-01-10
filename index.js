// input arr [5,20,45]
// number of steps to take some out is 3
// 45/2 = 23 , 23/2 = 11 , 20/2 = 10
// [5,10,11] = 26

// Solution steps
// Step 1 : iterate by number of steps and iterate arr inside steps loop
// Step 2 : find max number in arr
// Step 3 : divide max number by 2 and Ceil it 
// Step 4 : put that number on same index 

function findMinSum(arr,steps){
  for(let i = 0; i < steps; i++){
    let maxNum = maxInArr(arr);
    for(let j = 0; j < arr.length; j++){
      if(arr.indexOf(maxNum) === j){
        arr[j] = Math.ceil(maxNum/2);
      }
    }
  }
  return arr.reduce((a,b)=> a+b);
}

function maxInArr(arr){
  let temp = 0 ;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > temp){
      temp = arr[i];
    }
  }
  return temp;
}

findMinSum([5,20,45],3);