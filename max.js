var x = 650;
var y = 350;
var z = 550;
if(x>y && x>z)
console.log("x");

else if (y>z){
    console.log("y is bigger");
}
else{
    console.log('z');
}

console.log(Math.max(x,y,z));