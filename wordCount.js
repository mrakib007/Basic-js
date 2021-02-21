var word = "I am a good person. I may do some bad things but I am not a bad person I guess."
var count = 0 ;
for(var i=0; i<word.length;i++){
    var char = word[i];
    if(char == " " && word[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);