class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.studentIsDismissed;
  }
  ///////////////////////////////////////
  get Info() {
    return `Студент ${this.course}-гo курсу ${this.university} ,${this.fullName}`;
  }
  ////////////////////////////////////////
  get Marks() {
    return this.studentIsDismissed ? null : this.marks;
  }
  /////////////////////////////////////////
  set Marks(mark) {
    return this.studentIsDismissed ? null : this.marks.push(mark);
  }
  /////////////////////////////////////////
  get Average() {
    let averMark = 0;
    this.marks.reduce(function (acc, cur) {
      return (averMark = acc + cur);
    });
    averMark = averMark / this.marks.length;
    return averMark;
  }
  /////////////////////////////////////////
  dissmis() {
    if ((this.studentIsDismissed = true)) {
      return this.fullName;
    }
  }
  /////////////////////////////////////////
  recover() {
    this.studentIsDismissed = false;
    return this.fullName;
  }
}

const stud1 = new Student(
  `Вищої Школи Психотерапії м.Одеса`,
  `1`,
  `Остап Бендер`
);

console.log(stud1.Info);

console.log(`Marks:`, stud1.Marks);

stud1.Marks = 5;
console.log(`New marks:`, stud1.Marks);

console.log(`Average mark:`, stud1.Average);

console.log(`Dismissed stud:`, stud1.dissmis());
console.log(`Marks of dismissed student:`, stud1.Marks);
stud1.Marks = 5;
console.log(`Marks:`, stud1.Marks);

console.log(`Recovered student:`, stud1.recover());
console.log(`Marks of recovered student:`, stud1.marks);
stud1.Marks = 5;
console.log(`Marks:`, stud1.Marks);
