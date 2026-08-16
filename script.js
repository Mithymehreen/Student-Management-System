
   
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
    
