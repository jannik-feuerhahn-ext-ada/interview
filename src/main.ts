interface TestScores {
  subject: string;
  grade: number;
}

interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
  testScores: TestScores[];
}

const main = (students: Student[]) => {
  const getGrade = (studentId: number): number => {
    let student: Student | null = null;

    for (let s of students) {
      if (s.id === studentId) {
        student = s;
        break;
      }
    }

    if (!student) return -1;
    let sum = 0;

    for (let testScore of student.testScores) {
      sum += testScore.grade;
    }

    return sum / student.testScores.length;
  };

  const fails: Student[] = [];
  for (let student of students) {
    if (getGrade(student.id) < 60) {
      fails.push(student);
    }
  }

  for (let fail of fails) {

    //Sendmail
    console.log(
      `Sent email message from "uni@uni.edu" to "${fail.email}" with content: "You failed your exams ${fail.name}, sorry"`
    );
  }
};

main([
  {
    id: 1,
    name: "John",
    age: 30,
    email: "john@johnjohn.com",
    testScores: [
      {
        subject: "math",
        grade: 10,
      },
      {
        subject: "english",
        grade: 10,
      },
      {
        subject: "science",
        grade: 50,
      },
    ],
  },
]);


