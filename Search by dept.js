function departmentSearch() {

    console.log("\n");
    line();
    console.log("            DEPARTMENT SEARCH");
    line();

    rl.question(
        "Enter Department: ",
        function(department) {

            const resultList = students.filter(
                function(student) {

                    return (
                        student.department
                            .toLowerCase() ===
                        department
                            .trim()
                            .toLowerCase()
                    );
                }
            );

            if (resultList.length === 0) {
                console.log("No students found!");
                return pause();
            }

            console.log("\nStudents found:");

            resultList.forEach(
                function(student) {

                    console.log(
                        student.id +
                        " - " +
                        student.name +
                        " - " +
                        student.marks
                    );
                }
            );

            pause();
        }
    );
}
