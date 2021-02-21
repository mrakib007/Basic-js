// var name = [3,5,4,8,4,5,54,4,4,9,9,11,11,54,87,22,44,55];
// var unique = [];
// for(var i=0; i<name.length; i++){
//     var element = name[i];
//     var index = unique.indexOf(element);
//     if(index==-1)
//     unique.push(element);
// } 
// console.log(unique);

var newArray = [4,6,7,1,5,56,7,41,5,6,6,6,6];
var copyArray = [];
for (var i = 0;i<newArray.length;i++){
    var element = newArray[i];
    var index = copyArray.indexOf(element);
    if(index == -1)
    copyArray.push(element);
}
console.log(copyArray);