function student(name,age,cgpa,lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;
    
    this.display = function(){
        console.log(this.name,this.age,this.cgpa,this.lang);
    }

}
var student1 = new student('Rakibul Hasan',24,3.40,'English');
student1.display();



console.log(Math.ceil(Math.random()*10));

//This is a problem regarding object and constructor.
// function in a constructor