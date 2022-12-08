function softUniStudents(input) {
    const courses = {}


    for(const string of input) {
        if(string.includes(':')) {
            const [courseName, capacity] = string.split(': ');
            if(!courses[courseName]) {
                courses[courseName] = {
                    capacity:0,
                    students:[]
                };
            }
            courses[courseName].capacity += Number(capacity);
        } else {
            const destructed = string.split(' with email ');
            let [username, credits] = destructed.shift().split('[');
            credits = Number(credits.substring(0, credits.length - 1));
            const [email, courseName] = destructed.shift().split(' joins ');

            const course = courses[courseName];

            if(course && course.capacity) {
                course.capacity--;
                course.students.push({
                    username:username,
                    credits:credits,
                    email:email
                })
            }
        }
    }

    const sortedCourses = Object.entries(courses)
    .sort((a, b) => b[1].students.length - a[1].students.length);

    for(const [courseName, course] of sortedCourses) {
        console.log(`${courseName}: ${course.capacity} places left`);
        const sortedStudents = course.students.sort((a, b) => b.credits - a.credits);
        for(const student of sortedStudents) {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        }
    }
}
















softUniStudents(['JavaBasics: 2', 
'user1[25] with email user1@user.com joins C#Basics', 
'C#Advanced: 3', 
'JSCore: 4', 
'user2[30] with email user2@user.com joins C#Basics', 
'user13[50] with email user13@user.com joins JSCore', 
'user1[25] with email user1@user.com joins JSCore', 
'user8[18] with email user8@user.com joins C#Advanced', 
'user6[85] with email user6@user.com joins JSCore', 
'JSCore: 2', 
'user11[3] with email user11@user.com joins JavaBasics', 
'user45[105] with email user45@user.com joins JSCore', 
'user007[20] with email user007@user.com joins JSCore', 
'user700[29] with email user700@user.com joins JSCore', 
'user900[88] with email user900@user.com joins JSCore']);