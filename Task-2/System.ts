import { GradeBook } from "../Task-2/GradeBook.ts";
import { Student } from "../Task-2/Student.ts";

// 1. Create a gradebook
const gradeBook = new GradeBook("Computer Science 101");

// 2. Create students (Note: Grades object {} is required in the constructor)
const student1 = new Student("S001", "Alice Johnson", "alice@school.com", {});
const student2 = new Student("S002", "Bob Smith", "bob@school.com", {});
const student3 = new Student("S003", "Charlie Brown", "charlie@school.com", {});

// 3. Add grades for students
student1.addGrade("Math", 95.0);
student1.addGrade("English", 88.0);
student1.addGrade("Science", 92.0);

student2.addGrade("Math", 78.0);
student2.addGrade("English", 85.0);
student2.addGrade("Science", 80.0);

student3.addGrade("Math", 90.0);
student3.addGrade("English", 92.0);
student3.addGrade("Science", 89.0);

// 4. Add students to gradebook
gradeBook.addStudent(student1);
gradeBook.addStudent(student2);
gradeBook.addStudent(student3);

// --- OUTPUT SECTION ---

// 5. Display all students
console.log("All Students:", gradeBook.displayAllStudents());

// 6. Get class average
console.log("Class Average:", gradeBook.getClassAverage().toFixed(2));

// 7. Get top students
// Your current getTopStudents returns a string of names: "Alice Johnson, Charlie Brown"
const topStudentsList = gradeBook.getTopStudents(2);
console.log("Top 2 Students:", topStudentsList);

// 8. Get student info (This method uses console.log internally)
console.log("\n--- Detailed Student Info ---");
student1.getStudentInfo();

// 9. Test your new method (from previous turn)
// console.log("Students with A Grade:", gradeBook.getStudentsByLetterGrade("A"));