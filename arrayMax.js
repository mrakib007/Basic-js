var marks = [10,20,23,5,1,5,54,78,254,58,23,47];
var max = marks[0];
for(var i =0 ;i<marks.length ;i++){
   var element = marks[i];
    if(element>max){
        max=element;
    }
}
console.log(max);