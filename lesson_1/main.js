
/// find nearest prime number of n (can be higher or lower)
const num = 24;
const checkPrime = n => {
   if (n==1){
      return false;
   }else if(n == 2){
      return true;
   }else{
      for(let i = 2; i <= Math.sqrt(n); i++){
         if(n % i == 0){
            return false;
         }
      }
      return true;
   };
};
const nearestLowerPrime = lowerNum => {
   while(!checkPrime(--lowerNum)){};
   return lowerNum;
};
const nearestHigherPrime = higherNum => {
    while(!checkPrime(++higherNum)){};
    return higherNum;
 };

console.log(nearestLowerPrime(13));
console.log(nearestHigherPrime(17));

//SPREAD
const array1 = [0,2,4,6,8,118];
const array2 = [1,3,5,7];
const arr3 = [...new Set([...array1, ...array2])];
console.log(arr3)


    arr4 = [array1, array2]
        .reduce((r, a) => (a.forEach((a, i) => (r[i] = r[i] || []).push(a)), r), [])
        .reduce((a, b) => a.concat(b));
    let arr5=[]
    for(var i = 0; i<=3; i++){
        arr5.push(array1(i))
    }
console.log("arr4:", arr4);


//

let run = 0, first = 0, second = 0;
const newArr = [];
while(run < arr1.length + arr2.length){
   if(first > second){
      newArr[run] = arr2[second];
      second++;
   }else{
      newArr[run] = arr1[first];
      first++;
   }
   run++;
};
console.log(newArr);