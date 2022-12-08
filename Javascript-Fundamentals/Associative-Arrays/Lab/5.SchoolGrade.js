function schoolGrade(input) {
    const students = new Map()

    for(const string of input) {
        const elements = string.split(' ');
        const name = elements.shift();
        const grades = elements.map(Number);

        if(students.has(name)) {
            const currentGrades = students.get(name);

            grades.forEach(grade => currentGrades.push(grade));

            students.set(name, currentGrades);
        } else {
            students.set(name, grades);
        }
    }

    const studentsEntries = Array.from(students.entries());
    studentsEntries.sort((a, b) => a[0].localeCompare(b[0]));

    const sortedStudents = new Map(studentsEntries);

    for(const [name, grades] of sortedStudents) {
        const gradeSum = grades.reduce((a, b) => a + b);
        const average = gradeSum / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}