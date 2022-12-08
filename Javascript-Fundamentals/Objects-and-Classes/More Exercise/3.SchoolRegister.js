function schoolRegister(input) {
    class Student {
        constructor(name, grade, average) {
            this.name = name;
            this.grade = Number(grade);
            this.average = Number(average);
        }
    }
    class Grade {
        constructor(grade, students) {
            this.grade = grade + 1;
            this.students = students;
            const scoreSum = students.map(a => a.average)
                .reduce((a, b) => a + b);
            this.annualAverage = scoreSum / students.length;
        }

        info() {
            const studentNames = this.students.map(a => a.name);
            console.log(`${this.grade} Grade`);
            console.log(`List of students: ${studentNames.join(', ')}`);
            console.log(`Average annual score from last year: ${this.annualAverage.toFixed(2)}`);
            console.log();
        }
    }

    const students = input.map(a => {
        const [name, grade, average] = a
            .split(`, `)
            .map(b => b.split(' ').pop());
        return new Student(name, grade, average);
        })
        .filter(a => a.average >= 3)
        .sort((a, b) => a.grade - b.grade);
    
    let currentGradeNumber;

    for(const student of students) {
        if(currentGradeNumber !== student.grade) {
            currentGradeNumber = student.grade;
            const currentGradeStudents = students.filter(a => a.grade === currentGradeNumber);
            const currentGrade = new Grade(student.grade, currentGradeStudents);
            currentGrade.info();
        }
    }
}
