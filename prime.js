function primeNumber(n){
for(var i=2;i<n;i++){
    if(n%i==0){
       return 'not a prime number';
        break;
    }
    
}
return 'prime number';
}
var result = primeNumber(79);
console.log(result);