class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];

    //this.marks = [];

    this.getInfo = function () {
      return `Студент ${this.course}-гo курсу ${this.university} ,${this.fullName}`;
    };
  }

  get Marks() {
    return this.marks;
  }
  set Marks(mark) {
    this.marks.push(mark);
  }

  get Average() {
    let averMark = 0;
    this.marks.reduce(function (acc, cur, curInd) {
      return (averMark = acc + cur);
    });
    averMark = averMark / this.marks.length;
    return averMark;
  }
}

const stud1 = new Student(
  `Вищої Школи Психотерапії м.Одеса`,
  `1`,
  `Остап Бендер`
);

console.log(stud1.getInfo());

console.log(stud1.Marks);

stud1.Marks = 5;
console.log(stud1.Marks);

console.log(stud1.Average);
