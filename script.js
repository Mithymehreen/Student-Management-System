
    return "FAIL";
}


// ------------------------------------------------------
// FIND STUDENT
// ------------------------------------------------------

function findStudent(id) {

    return students.find(
        student => student.id === Number(id)
    );
}


// ======================================================
//                ADD STUDENT
// ======================================================

function addStudent() {

    console.clear();

    line();

    console.log("              ADD NEW STUDENT");

    line();

    rl.question("Enter Student ID: ", id => {

        id = Number(id);

        if (isNaN(id)) {

            console.log("\n❌ ID must be a number.");

            return pause(menu);
        }

        if (findStudent(id)) {

            console.log(
                "\n❌ This Student ID already exists."
            );

            return pause(menu);
        }


        rl.question("Enter Student Name: ", name => {

            if (name.trim() === "") {

                console.log(
                    "\n❌ Name cannot be empty."
                );

                return pause(menu);
            }


            rl.question(
                "Enter Department: ",
                department => {

                    if (department.trim() === "") {

                        console.log(
                            "\n❌ Department cannot be empty."
                        );

                        return pause(menu);
                    }


                    rl.question(
                        "Enter Semester: ",
                        semester => {

                            semester = Number(semester);

                            if (
                                isNaN(semester) ||
                                semester < 1 ||
                                semester > 12
                            ) {

                                console.log(
                                    "\n❌ Invalid semester."
                                );

                                return pause(menu);
                            }


                            rl.question(
                                "Enter Age: ",
                                age => {

                                    age = Number(age);

                                    if (
                                        isNaN(age) ||
                                        age < 15 ||
                                        age > 100
                                    ) {

                                        console.log(
                                            "\n❌ Invalid age."
                                        );

                                        return pause(menu);
                                    }


                                    rl.question(
                                        "Enter Marks: ",
                                        marks => {

                                            marks = Number(marks);

                                            if (
                                                isNaN(marks) ||
                                                marks < 0 ||
                                                marks > 100
                                            ) {

                                                console.log(
                                                    "\n❌ Marks must be between 0 and 100."
                                                );

                                                return pause(menu);
                                            }


                                            const student = {

                                                id: id,

                                                name:
                                                    name.trim(),

                                                department:
                                                    department.trim(),

                                                semester:
                                                    semester,

                                                age:
                                                    age,

                                                marks:
                                                    marks
                                            };


                                            students.push(student);


                                            console.log(
                                                "\n✅ Student added successfully!"
                                            );

                                            pause(menu);

                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            );
        }
    });
}


// ======================================================
//                VIEW ALL STUDENTS
// ======================================================

function viewStudents() {

    console.clear();

    line();

    console.log("              ALL STUDENTS");

    line();


    if (students.length === 0) {

        console.log(
            "\n❌ No students found."
        );

        return pause(menu);
    }


    students.forEach((student, index) => {

        console.log(`
Student #${index + 1}

ID          : ${student.id}
Name        : ${student.name}
Department  : ${student.department}
Semester    : ${student.semester}
Age         : ${student.age}
Marks       : ${student.marks}
Grade       : ${getGrade(student.marks)}
Result      : ${getResult(student.marks)}
`);

        line();
    });


    console.log(
        `Total Students: ${students.length}`
    );

    pause(menu);
}


// ======================================================
//                SEARCH STUDENT
// ======================================================

function searchStudent() {

    console.clear();

    line();

    console.log("              SEARCH STUDENT");

    line();


    rl.question(
        "Enter Student ID: ",
        id => {

            const student = findStudent(id);


            if (!student) {

                console.log(
                    "\n❌ Student not found."
                );

                return pause(menu);
            }


            console.log(`
                
Student Information
-------------------

ID          : ${student.id}
Name        : ${student.name}
Department  : ${student.department}
Semester    : ${student.semester}
Age         : ${student.age}
Marks       : ${student.marks}
Grade       : ${getGrade(student.marks)}
Result      : ${getResult(student.marks)}

            `);


            pause(menu);
        }
    );
}


// ======================================================
//                UPDATE STUDENT
// ======================================================

function updateStudent() {

    console.clear();

    line();

    console.log("              UPDATE STUDENT");

    line();


    rl.question(
        "Enter Student ID: ",
        id => {

            const student = findStudent(id);


            if (!student) {

                console.log(
                    "\n❌ Student not found."
                );

                return pause(menu);
            }


            console.log(
                `\nCurrent Name: ${student.name}`
            );


            rl.question(
                "Enter New Name: ",
                name => {

                    if (name.trim() !== "") {

                        student.name = name.trim();
                    }


                    console.log(
                        `Current Department: ${student.department}`
                    );


                    rl.question(
                        "Enter New Department: ",
                        department => {

                            if (
                                department.trim() !== ""
                            ) {

                                student.department =
                                    department.trim();
                            }


                            console.log(
                                `Current Semester: ${student.semester}`
                            );


                            rl.question(
                                "Enter New Semester: ",
                                semester => {

                                    if (
                                        semester.trim() !== ""
                                    ) {

                                        semester =
                                            Number(semester);

                                        if (
                                            semester >= 1 &&
                                            semester <= 12
                                        ) {

                                            student.semester =
                                                semester;
                                        }
                                    }


                                    console.log(
                                        `Current Marks: ${student.marks}`
                                    );


                                    rl.question(
                                        "Enter New Marks: ",
                                        marks => {

                                            if (
                                                marks.trim() !== ""
                                            ) {

                                                marks =
                                                    Number(marks);

                                                if (
                                                    marks >= 0 &&
                                                    marks <= 100
                                                ) {

                                                    student.marks =
                                                        marks;
                                                }
                                            }


                                            console.log(
                                                "\n✅ Student updated successfully!"
                                            );

                                            pause(menu);
                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            );
        }
    );
}


// ======================================================
//                DELETE STUDENT
// ======================================================

function deleteStudent() {

    console.clear();

    line();

    console.log("              DELETE STUDENT");

    line();


    rl.question(
        "Enter Student ID: ",
        id => {

            const index =
                students.findIndex(
                    student =>
                        student.id === Number(id)
                );


            if (index === -1) {

                console.log(
                    "\n❌ Student not found."
                );

                return pause(menu);
            }


            console.log(
                `\nStudent: ${students[index].name}`
            );


            rl.question(
                "Are you sure? (yes/no): ",
                answer => {

                    if (
                        answer.toLowerCase() === "yes"
                    ) {

                        students.splice(index, 1);

                        console.log(
                            "\n🗑️ Student deleted successfully!"
                        );

                    } else {

                        console.log(
                            "\nDelete cancelled."
                        );
                    }


                    pause(menu);
                }
            );
        }
    );
}


// ======================================================
//                CLASS AVERAGE
// ======================================================

function classAverage() {

    console.clear();

    line();

    console.log("              CLASS AVERAGE");

    line();


    if (students.length === 0) {

        console.log(
            "\nNo students available."
        );

        return pause(menu);
    }


    let total = 0;


    students.forEach(student => {

        total += student.marks;

    });


    const average =
        total / students.length;


    console.log(`
    
Total Students : ${students.length}

Total Marks    : ${total}

Class Average  : ${average.toFixed(2)}

    `);


    pause(menu);
}


// ======================================================
//                HIGHEST MARK
// ======================================================

function highestMark() {

    console.clear();

    line();

    console.log("              HIGHEST MARK");

    line();


    if (students.length === 0) {

        console.log(
            "\nNo students available."
        );

        return pause(menu);
    }


    const student =
        students.reduce(
            (highest, current) => {

                if (
                    current.marks >
                    highest.marks
                ) {

                    return current;
                }

                return highest;
            }
        );


    console.log(`
    
🏆 Top Student

Name       : ${student.name}
ID         : ${student.id}
Department : ${student.department}
Marks      : ${student.marks}
Grade      : ${getGrade(student.marks)}

    `);


    pause(menu);
}


// ======================================================
//                LOWEST MARK
// ======================================================

function lowestMark() {

    console.clear();

    line();

    console.log("              LOWEST MARK");

    line();


    if (students.length === 0) {

        console.log(
            "\nNo students available."
        );

        return pause(menu);
    }


    const student =
        students.reduce(
            (lowest, current) => {

                if (
                    current.marks <
                    lowest.marks
                ) {

                    return current;
                }

                return lowest;
            }
        );


    console.log(`
    
📉 Lowest Student

Name       : ${student.name}
ID         : ${student.id}
Department : ${student.department}
Marks      : ${student.marks}
Grade      : ${getGrade(student.marks)}

    `);


    pause(menu);
}


// ======================================================
//                TOP 3 STUDENTS
// ======================================================

function topThree() {

    console.clear();

    line();

    console.log("              TOP 3 STUDENTS");

    line();


    const sortedStudents =
        [...students].sort(
            (a, b) => b.marks - a.marks
        );


    if (sortedStudents.length === 0) {

        console.log(
            "\nNo students available."
        );

        return pause(menu);
    }


    const topStudents =
        sortedStudents.slice(0, 3);


    topStudents.forEach(
        (student, index) => {

            console.log(
                `${index + 1}. ${student.name}
    ID    : ${student.id}
    Marks : ${student.marks}
    Grade : ${getGrade(student.marks)}
`
            );
        }
    );


    pause(menu);
}


// ======================================================
//                PASS / FAIL REPORT
// ======================================================

function resultReport() {

    console.clear();

    line();

    console.log("              RESULT REPORT");

    line();


    const passed =
        students.filter(
            student => student.marks >= 40
        );


    const failed =
        students.filter(
            student => student.marks < 40
        );


    console.log(`
Total Students : ${students.length}

Passed         : ${passed.length}

Failed         : ${failed.length}

Pass Rate      : ${
        students.length === 0
            ? 0
            : (
                passed.length /
                students.length *
                100
            ).toFixed(2)
    }%

    `);


    if (failed.length > 0) {

        console.log("Failed Students:");

        failed.forEach(student => {

            console.log(
                `- ${student.name} (${student.marks})`
            );

        });
    }


    pause(menu);
}


// ======================================================
//                DEPARTMENT SEARCH
// ======================================================

function departmentSearch() {

    console.clear();

    line();

    console.log("              DEPARTMENT SEARCH");

    line();


    rl.question(
        "Enter Department: ",
        department => {

            const result =
                students.filter(
                    student =>
                        student.department
                            .toLowerCase() ===
                        department
                            .toLowerCase()
                );


            if (result.length === 0) {

                console.log(
                    "\n❌ No students found."
                );

                return pause(menu);
            }


            console.log(
                `\nFound ${result.length} student(s):\n`
            );


            result.forEach(student => {

                console.log(
                    `${student.id} | ${student.name} | Marks: ${student.marks}`
                );

            });


            pause(menu);
        }
    );
}


// ======================================================
//                STATISTICS
// ======================================================

function statistics() {

    console.clear();

    line();

    console.log("              STUDENT STATISTICS");

    line();


    if (students.length === 0) {

        console.log(
            "\nNo students available."
        );

        return pause(menu);
    }


    const total =
        students.length;


    const passed =
        students.filter(
            s => s.marks >= 40
        ).length;


    const failed =
        students.filter(
            s => s.marks < 40
        ).length;


    const average =
        students.reduce(
            (sum, student) =>
                sum + student.marks,
            0
        ) / total;


    const highest =
        Math.max(
            ...students.map(
                student => student.marks
            )
        );


    const lowest =
        Math.min(
            ...students.map(
                student => student.marks
            )
        );


    console.log(`
    
Total Students : ${total}

Passed         : ${passed}

Failed         : ${failed}

Average Marks  : ${average.toFixed(2)}

Highest Marks  : ${highest}

Lowest Marks   : ${lowest}

Pass Percentage: ${
        ((passed / total) * 100).toFixed(2)
    }%

    `);


    pause(menu);
}


// ======================================================
//                MAIN MENU
// ======================================================

function menu() {

    console.clear();

    console.log(`
╔══════════════════════════════════════════════════╗
║                                                  ║
║          🎓 STUDENT MANAGEMENT SYSTEM            ║
║                                                  ║
╚══════════════════════════════════════════════════╝

1. ➕ Add Student
2. 📋 View All Students
3. 🔍 Search Student
4. ✏️  Update Student
5. 🗑️  Delete Student
6. 📊 Class Average
7. 🏆 Highest Mark
8. 📉 Lowest Mark
9. 🥇 Top 3 Students
10. 📑 Pass / Fail Report
11. 🔎 Search by Department
12. 📈 Student Statistics
13. 🚪 Exit

--------------------------------------------------
    `);


    rl.question(
        "Enter your choice: ",
        choice => {

            switch (choice) {

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
                    highestMark();
                    break;

                case "8":
                    lowestMark();
                    break;

                case "9":
                    topThree();
                    break;

                case "10":
                    resultReport();
                    break;

                case "11":
                    departmentSearch();
                    break;

                case "12":
                    statistics();
                    break;

                case "13":

                    console.clear();

                    console.log(`
╔══════════════════════════════════════╗
║                                      ║
║       Thank You For Using App!       ║
║                                      ║
║                👋                    ║
║                                      ║
╚══════════════════════════════════════╝
                    `);

                    rl.close();

                    break;

                default:

                    console.log(
                        "\n❌ Invalid choice!"
                    );

                    pause(menu);
            }
        }
    );
}


// ======================================================
//                START APPLICATION
// ======================================================

console.clear();

console.log(`
╔══════════════════════════════════════════════════╗
║                                                  ║
║        WELCOME TO STUDENT MANAGEMENT SYSTEM      ║
║                                                  ║
║              JavaScript Project                  ║
║                                                  ║
╚══════════════════════════════════════════════════╝
`);


setTimeout(() => {

    menu();

}, 500);
    
