import { Student } from './Student.ts';

export class GradeBook {
    className: string;
    students: Student[] = [];
    constructor(className: string, students: Student[] = []) {
        this.className = className;
        this.students = students;
    }
    addStudent(student: Student) {
        this.students.push(student)
    }
    removeStudent(studentId: string): boolean {
        const index = this.students.findIndex(student => student.studentId === studentId);
        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }
        return false;
    }
    findStudent(studentId: string): Student | undefined {
        const index = this.students.findIndex(student => student.studentId === studentId);
        if (index !== -1) {
            return this.students[index];
        }
        return undefined;
    }
    getClassAverage(): number {
        if (this.students.length === 0) {
            return 0;
        }
        let sumOfAverages = 0;
        for (const student of this.students) {
            sumOfAverages += student.calculateAverage();
        }
        return sumOfAverages / this.students.length;
    }
    getTopStudents(count: number): string {
        if (this.students.length === 0) {
            return "There are no students";
        }

        const sortedStudents = [...this.students].sort(
            (a, b) => b.calculateAverage() - a.calculateAverage()
        );

        const topStudents = sortedStudents.slice(0, count);

        return topStudents.map(student => student.name).join(", ");
    }
    displayAllStudents(): string {
        return this.students.map(student => student.name).join(', ')
    }
    getStudentsByLetterGrade(letterGrade: string): string {
        return this.students
            .filter(student => student.getLetterGrade() === letterGrade)
            .map(student => student.name)
            .join(', ');
    }
}