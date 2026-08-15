function searchStudent() {
    console.clear();
    line();
    console.log(" SEARCH STUDENT");
    line();

    rl.question("Enter Student ID: ", id => {

        const student = findStudent(id);

        if (!student) {
            console.log("Student not found!");
            return pause();
        }
      
  console.log(`
ID          : ${student.id}
Name        : ${student.name}
Department  : ${student.department}
Semester    : ${student.semester}
Marks       : ${student.marks}
Grade       : ${grade(student.marks)}
Result      : ${result(student.marks)}
        `);

        pause();
    });
}
