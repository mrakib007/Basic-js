function fibonacci(n){
    if(n==0)
    return [0] ;
    if(n==1)
    return [0,1];
    else{
    var fibo =  fibonacci(n-1);
    var next = fibo[n-1]+ fibo[n-2];
    fibo.push(next);
    return fibo;
    }
}
var result = fibonacci(20);
console.log(result);