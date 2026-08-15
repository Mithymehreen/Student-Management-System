function viewStudents() {
    console.clear();
    line();
    console.log("ALL STUDENTS");
    line();

    if (students.length === 0) {
        console.log("No students found.");
        return pause();
    }

    students.forEach((student, index) => {

        console.log(`
Student ${index + 1}
ID          : ${student.id}
Name        : ${student.name}
Department  : ${student.department}
Semester    : ${student.semester}
Marks       : ${student.marks}
Grade       : ${grade(student.marks)}
Result      : ${result(student.marks)}
----------------------------------------------
        `);
    });

    console.log("Total Students:", students.length);
    pause();
}
