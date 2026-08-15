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
    console.log("====");
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
    return students.find(s => s.id === Number(id));
}

function pause() {
    rl.question("\nPress ENTER to continue...", () => {
        menu();
    });
}
function addStudent() {
    console.clear();
    line();
    console.log("              ADD STUDENT");
    line();

    rl.question("Student ID: ", id => {

        id = Number(id);

        if (isNaN(id) || id <= 0) {
            console.log("Invalid ID!");
            return pause();
        }

        if (findStudent(id)) {
            console.log("This ID already exists!");
            return pause();
        }

        rl.question("Student Name: ", name => {

            if (name.trim() === "") {
                console.log("Name cannot be empty!");
                return pause();
            }

            rl.question("Department: ", department => {

                if (department.trim() === "") {
                    console.log("Department cannot be empty!");
                    return pause();
                }

                rl.question("Semester: ", semester => {

                    semester = Number(semester);

                    if (isNaN(semester) || semester < 1) {
                        console.log("Invalid semester!");
                        return pause();
                    }

                    rl.question("Marks (0-100): ", marks => {

                        marks = Number(marks);

                        if (isNaN(marks) || marks < 0 || marks > 100) {
                            console.log("Marks must be between 0 and 100!");
                            return pause();
                        }

                        students.push({
                            id: id,
                            name: name.trim(),
                            department: department.trim(),
                            semester: semester,
                            marks: marks
                        });

                        console.log("\nStudent added successfully!");
                        pause();
                    });
                });
            });
        });
    });
}
