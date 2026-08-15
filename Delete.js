function deleteStudent() {
    console.clear();
    line();
    console.log(" DELETE STUDENT");
    line();

   rl.question("Enter Student ID: ", id => {
const index = students.findIndex(
 s => s.id === Number(id)
);
if (index === -1) {
 console.log("Student not found!");
  return pause();
    } console.log(
 "Student:",
   students[index].name
        );
rl.question(
"Delete this student? (yes/no): ",
   answer => {
 if (answer.toLowerCase() === "yes") {
 students.splice(index, 1);
console.log("Student deleted successfully!");
 } else {
   console.log("Delete cancelled.");
 }
 pause();
   }
   );
    });
}
