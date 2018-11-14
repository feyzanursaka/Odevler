class Student {
    constructor(id, name, gpa, courses) {
        this.id = id
        this.name = name
        this.gpa = gpa
        this.courses = courses
    }
    toString() { //not required in the quiz
        return this.id+ " " +this.name
    }
}

class Course {
    constructor(name, time, date, classes) {
        this.name = name
        this.time = time
        this.date = date
        this.classes = classes
    }
    toString() { //not required in the quiz
        return this.name+" "
    }
}

class Database {
    constructor() {
        this.students = new Map()
        this.courses = new Map()
    }
    addStudent(id,stu){
        this.students.set(id,stu)
    }
    addCourse(name,crs){
        this.courses.set(name,crs)
    }
    toString() {
        return this.name+" by "+this.author.name
    }
}