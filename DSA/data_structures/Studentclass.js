class Studentclass{
 constructor(firstName,lastName, year){
  this.firstName = firstName;
  this.lastName = lastName;
  this.grade = year;
  this.tardie = 0;
  this.classCount = 0;
 }
 markLate(){
  this.tardie++;
  console.log(`${this.firstName} is late ${this.tardie} days`); 
 }
 static classCount(){
   return `CLASS Strenght ${this.classCount}`
 }
}
let newStudent = new Studentclass("pavi", "kalay", 3);

console.log(newStudent);
newStudent.markLate();

let classCount = Studentclass.classCount();
console.log(classCount);