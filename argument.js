function addNumber(){
    var sum=0;
    for(let i=0;i<arguments.length;i++){
        const num = arguments[i];
        sum = sum+num;
    }
    return sum;
}

var result = addNumber(3,5,8,15,29,13);
console.log(result);