
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

