function reverse(str){
    var reverse = " ";

    // for(var i = 0; i<str.length ; i++){
    //     var char = str[i];
    //     reverse = char+reverse;
    // }
    // return reverse;

    for(var i = str.length; i>0 ; i--){
        reverse = reverse+str[i];

    }
    return reverse
}
var word = "Hello Ami Md. Rakibul Hasan";
console.log(reverse(word));
