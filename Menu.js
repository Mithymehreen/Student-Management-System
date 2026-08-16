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
