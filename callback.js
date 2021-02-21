function explain_callback(name,age,task){
    console.log('hello',name);
    console.log('your age',age);
    task();
}
function washHand(){
    console.log('wash hand with soap');
}
function takeShower(){
    console.log('Take Shower');
}
function scroll_facebook(){
    console.log('Scroll Facebook');
}
explain_callback('Sogir Uddin',17,washHand);
explain_callback('Kobir Uddin',19,takeShower);
explain_callback('Rakib Hasan',22,scroll_facebook);