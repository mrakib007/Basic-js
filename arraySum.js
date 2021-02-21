function getSum(number){
var sum =0;
for(i=0;i<number.length;i++){
   sum = sum+number[i];
 }
 return sum;
}
var number = [10,20,23,5,1,5,54,78,254,58,23,47];
var result = getSum(number);
console.log(result);
console.log(getSum(number));