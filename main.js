const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let students = [
    {
        id: 101,
        name: "Arobi Akter",
        department: "SWE",
        semester: 5,
        marks: 85
    },
    {
        id: 102,
        name: "Sadia Rahman",
        department: "CSE",
        semester: 4,
        marks: 78
    },
    {
        id: 103,
        name: "Nusrat Jahan",
        department: "SWE",
        semester: 5,
        marks: 92
    }
];


function line() {
    console.log("==");
}

function grade(marks) {
    if (marks >= 80) return "A+";
    if (marks >= 70) return "A";
    if (marks >= 60) return "B";
    if (marks >= 50) return "C";
    if (marks >= 40) return "D";
    return "F";
}

function result(marks) {
    return marks >= 40 ? "PASS" : "FAIL";
}

function findStudent(id) {
    return students.find(function(student) {
        return student.id === Number(id);
    });
}

function pause() {
    rl.question("\nPress ENTER to continue...", function() {
        menu();
    });
}


function addStudent() {

    console.log("\n");
    line();
    console.log("              ADD STUDENT");
    line();

    rl.question("Student ID: ", function(idInput) {

        let id = Number(idInput);

        if (isNaN(id) || id <= 0) {
            console.log("Invalid ID!");
            return pause();
        }

        if (findStudent(id)) {
            console.log("This ID already exists!");
            return pause();
        }

        rl.question("Student Name: ", function(name) {

            if (name.trim() === "") {
                console.log("Name cannot be empty!");
                return pause();
            }

            rl.question("Department: ", function(department) {

                if (department.trim() === "") {
                    console.log("Department cannot be empty!");
                    return pause();
                }

                rl.question("Semester: ", function(semesterInput) {

                    let semester = Number(semesterInput);

                    if (isNaN(semester) || semester < 1) {
                        console.log("Invalid semester!");
                        return pause();
                    }

                    rl.question("Marks (0-100): ", function(marksInput) {

                        let marks = Number(marksInput);

                        if (
                            isNaN(marks) ||
                            marks < 0 ||
                            marks > 100
                        ) {
                            console.log(
                                "Marks must be between 0 and 100!"
                            );
                            return pause();
                        }

                        students.push({
                            id: id,
                            name: name.trim(),
                            department: department.trim(),
                            semester: semester,
                            marks: marks
                        });

                        console.log(
                            "\nStudent added successfully!"
                        );

                        pause();
                    });
                });
            });
        });
    });
}


function viewStudents() {

    console.log("\n");
    line();
    console.log("              ALL STUDENTS");
    line();

    if (students.length === 0) {
        console.log("No students found.");
        return pause();
    }

    students.forEach(function(student, index) {

        console.log("\nStudent " + (index + 1));
        line();

        console.log("ID          :", student.id);
        console.log("Name        :", student.name);
        console.log("Department  :", student.department);
        console.log("Semester    :", student.semester);
        console.log("Marks       :", student.marks);
        console.log("Grade       :", grade(student.marks));
        console.log("Result      :", result(student.marks));
    });

    line();
    console.log("Total Students:", students.length);

    pause();
}

// ======================================================
// 3. SEARCH STUDENT
// ======================================================

function searchStudent() {

    console.log("\n");
    line();
    console.log("              SEARCH STUDENT");
    line();

    rl.question("Enter Student ID: ", function(id) {

        const student = findStudent(id);

        if (!student) {
            console.log("Student not found!");
            return pause();
        }

        console.log("\n");
        console.log("ID          :", student.id);
        console.log("Name        :", student.name);
        console.log("Department  :", student.department);
        console.log("Semester    :", student.semester);
        console.log("Marks       :", student.marks);
        console.log("Grade       :", grade(student.marks));
        console.log("Result      :", result(student.marks));

        pause();
    });
}

// ======================================================
// 4. UPDATE STUDENT
// ======================================================

function updateStudent() {

    console.log("\n");
    line();
    console.log("              UPDATE STUDENT");
    line();

    rl.question("Enter Student ID: ", function(id) {

        const student = findStudent(id);

        if (!student) {
            console.log("Student not found!");
            return pause();
        }

        rl.question(
            "New Name (" + student.name + "): ",
            function(name) {

                rl.question(
                    "New Department (" +
                    student.department +
                    "): ",
                    function(department) {

                        rl.question(
                            "New Semester (" +
                            student.semester +
                            "): ",
                            function(semesterInput) {

                                rl.question(
                                    "New Marks (" +
                                    student.marks +
                                    "): ",
                                    function(marksInput) {

                                        // Update Name
                                        if (name.trim() !== "") {
                                            student.name =
                                                name.trim();
                                        }

                                        // Update Department
                                        if (
                                            department.trim() !== ""
                                        ) {
                                            student.department =
                                                department.trim();
                                        }

                                        // Update Semester
                                        if (
                                            semesterInput.trim() !== ""
                                        ) {

                                            let semester =
                                                Number(semesterInput);

                                            if (
                                                !isNaN(semester) &&
                                                semester > 0
                                            ) {
                                                student.semester =
                                                    semester;
                                            }
                                        }

                                        // Update Marks
                                        if (
                                            marksInput.trim() !== ""
                                        ) {

                                            let marks =
                                                Number(marksInput);

                                            if (
                                                !isNaN(marks) &&
                                                marks >= 0 &&
                                                marks <= 100
                                            ) {
                                                student.marks =
                                                    marks;
                                            }
                                        }

                                        console.log(
                                            "\nStudent updated successfully!"
                                        );

                                        pause();
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    });
}

// ======================================================
// 5. DELETE STUDENT
// ======================================================

function deleteStudent() {

    console.log("\n");
    line();
    console.log("              DELETE STUDENT");
    line();

    rl.question("Enter Student ID: ", function(idInput) {

        let id = Number(idInput);

        let index = students.findIndex(function(student) {
            return student.id === id;
        });

        if (index === -1) {
            console.log("Student not found!");
            return pause();
        }

        console.log(
            "Student:",
            students[index].name
        );

        rl.question(
            "Delete this student? (yes/no): ",
            function(answer) {

                if (answer.toLowerCase() === "yes") {

                    students.splice(index, 1);

                    console.log(
                        "Student deleted successfully!"
                    );

                } else {

                    console.log("Delete cancelled.");
                }

                pause();
            }
        );
    });
}


function classAverage() {

    console.log("\n");
    line();
    console.log("              CLASS AVERAGE");
    line();

    if (students.length === 0) {
        console.log("No students available.");
        return pause();
    }

    const total = students.reduce(
        function(sum, student) {
            return sum + student.marks;
        },
        0
    );

    const average = total / students.length;

    console.log("Total Students :", students.length);
    console.log("Total Marks    :", total);
    console.log(
        "Average Marks  :",
        average.toFixed(2)
    );

    pause();
}


function topStudents() {

    console.log("\n");
    line();
    console.log("              TOP STUDENTS");
    line();

    if (students.length === 0) {
        console.log("No students available.");
        return pause();
    }

    const sorted = [...students].sort(
        function(a, b) {
            return b.marks - a.marks;
        }
    );

    const topThree = sorted.slice(0, 3);

    topThree.forEach(function(student, index) {

        console.log(
            (index + 1) +
            ". " +
            student.name +
            " - " +
            student.marks +
            " (" +
            grade(student.marks) +
            ")"
        );
    });

    pause();
}


function resultReport() {

    console.log("\n");
    line();
    console.log("              RESULT REPORT");
    line();

    const passed = students.filter(
        function(student) {
            return student.marks >= 40;
        }
    );

    const failed = students.filter(
        function(student) {
            return student.marks < 40;
        }
    );

    console.log(
        "Total Students :",
        students.length
    );

    console.log(
        "Passed         :",
        passed.length
    );

    console.log(
        "Failed         :",
        failed.length
    );

    let percentage = 0;

    if (students.length > 0) {
        percentage =
            (passed.length / students.length) * 100;
    }

    console.log(
        "Pass Percentage:",
        percentage.toFixed(2) + "%"
    );

    pause();
}


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


function menu() {

    console.log(`
           STUDENT MANAGEMENT SYSTEM         
  1. Add Student                              
  2. View All Students                        
  3. Search Student                           
  4. Update Student                           
  5. Delete Student                           
  6. Class Average                            
  7. Top 3 Students                           
  8. Pass / Fail Report                       
  9. Search by Department                     
 10. Exit                                     

`);

    rl.question(
        "Enter your choice: ",
        function(choice) {

            switch (choice.trim()) {

                case "1":
                    addStudent();
                    break;

                case "2":
                    viewStudents();
                    break;

                case "3":
                    searchStudent();
                    break;

                case "4":
                    updateStudent();
                    break;

                case "5":
                    deleteStudent();
                    break;

                case "6":
                    classAverage();
                    break;

                case "7":
                    topStudents();
                    break;

                case "8":
                    resultReport();
                    break;

                case "9":
                    departmentSearch();
                    break;

                case "10":
                    console.log(
                        "\nThank you for using the system!"
                    );
                    rl.close();
                    break;

                default:
                    console.log(
                        "\nInvalid choice!"
                    );
                    pause();
            }
        }
    );
}

                 
menu();
