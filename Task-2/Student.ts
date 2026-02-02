export class Student {
    studentId: string;
    name: string;
    email: string;
    grades: Record<string, number> = {};

    constructor(
        studentId: string,
        name: string,
        email: string,
        grades: Record<string, number>
    ) {
        this.studentId = studentId;
        this.email = email;
        this.name = name;
        this.grades = grades;
    }
    addGrade(subject: string, grade: number): void {
        this.grades[subject] = grade;
    }
    getGrade(subject: string): number | undefined {
        return this.grades[subject]
    }
    calculateAverage(): number {
        let total = 0;
        for (const grade of Object.values(this.grades)) {
            total += grade;
        }
        return Object.keys(this.grades).length === 0 ? 0 : total / Object.keys(this.grades).length;
    }
    getLetterGrade(): string {
        const avg = this.calculateAverage();
        if (avg >= 97) return "A+";
        if (avg >= 93) return "A";
        if (avg >= 90) return "A-";
        if (avg >= 87) return "B+";
        if (avg >= 83) return "B";
        if (avg >= 80) return "B-";
        if (avg >= 77) return "C+";
        if (avg >= 73) return "C";
        if (avg >= 70) return "C-";
        if (avg >= 67) return "D+";
        if (avg >= 60) return "D";
        return "F";
    }
    getStudentInfo() {
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log("Grades:");
        if (Object.keys(this.grades).length == 0) {
            console.log("No subjects assigned!")
        } else {
            for (const [subject, grade] of Object.entries(this.grades)) {
                console.log(` ${subject}:${grade}`);
            }
            console.log(`Average: ${this.calculateAverage().toFixed(1)}`);
            console.log(`Letter Grade: ${this.getLetterGrade()}`);
        }
    }
}
