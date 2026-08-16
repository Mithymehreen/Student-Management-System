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

