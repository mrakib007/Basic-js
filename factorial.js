function recursion(num){
    if (num==1)
    return 1;
    console.log(num, num-1);
    return num*recursion(num-1);
    
}
var result = recursion(5);
console.log(result);