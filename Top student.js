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
