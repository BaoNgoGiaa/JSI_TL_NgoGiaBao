// function person(firstname,lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     console.log(this.firstname+'  '+this.lastname);
// }
// var person = new person('A','Nguyen Van');



class Person {
    constructor(name,gender,id,dob) {
        this.name =name;
        this.gender=gender;
        this.id=id;
        this.dob=dob;
    }

    getStudentInfo() {
        return this.name+'  '+this.gender+'  ' +this.id+'  ' +this.dob+'  ';
    }
    get getName() {
        return this.name;
    }
    get getGender() {
        return this.gender;
    }
    get getId() {
        return this.id;
    }
    get getDob() {
        return this.dob;
    }
    set setName(name) {
        this.name =name;
    }
    set setGender(gender) {
        this.gender =gender;
    }
    set setId(id) {
        this.id = id;
    }
    set setDob(dob) {
        this.dob =dob;
    }
}

var student1 = new Person("Nguyen Van A","Male","123","1994");
student1.getStudentInfo();
console.log(student1.getDob);
console.log (student1.getName+'  '+ student1.getGender+'  '+ student1.getId+'  '+ student1.getDob);
student1.setDob =1995;
console.log(student1.getDob);

class Student extends Person {
    constructor(room,rank,name,gender,id,dob) {
        super(name,gender,id,dob);
        this.room = room;
        this.rank = rank;

    }
    getInfo() {
        return this.getStudentInfo() + this.rank;
    }
}
var student1 = new Student('10A1','Good','nva','male','123','1994');
console.log(student1.getInfo());