class Course {
    constructor(n, t, d) {
        this.name = n
        this.time = t 
        this.date = d
        this.rooms = []
    }

    toString() {
        return this.name+" "+this.time+" "+this.date
           " "+this.rooms.length +" "
    }
}

class Student {
    constructor(i, n, g) {
        this.id = i
        this.name = n
        this.gpa = g
        this.courses = []
    }

    toString() {
        return this.id+" "+this.name+" "+this.gpa
           " "+this.courses.length +" "
    }
}
