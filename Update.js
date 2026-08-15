function updateStudent() {
    console.clear();
    line();
    console.log(" UPDATE STUDENT");
 line();

 rl.question("Enter Student ID: ", id => {

 const student = findStudent(id);

 if (!student) {
   console.log("Student not found!");
 return pause();
        }
 rl.question(
`New Name (${student.name}): `,
   name => {

 rl.question(
`New Department (${student.department}): `,
department => {
 rl.question(
`New Semester (${student.semester}): `,
 semester => {
rl.question(
  `New Marks (${student.marks}): `,
  marks => {
 if (name.trim() !== "")
  student.name = name.trim();
 if (department.trim() !== "")
 student.department =
department.trim();
 if (semester.trim() !== "") {
   semester = Number(semester);
if (
 !isNaN(semester) &&
semester > 0
 ) {
  student.semester =
semester;   }
  }
  if (marks.trim() !== "") {
marks = Number(marks);
    if (
      !isNaN(marks) &&
      marks >= 0 &&
marks <= 100
    ) {
student.marks = marks;
      }
   }
 console.log(
"\nStudent updated successfully!"
 );
 pause();  }
      );
 }
);
 }
);
   }
 );
 });
}

