let student1 = { yearOfStudying: 5, facultyName: "Physical" };
let student2 = { yearOfStudying: 3, facultyName: "Juridical" };
let student3 = { yearOfStudying: 1, facultyName: "Psychological" };
let student4 = { yearOfStudying: 3, facultyName: "Foreign languages" };
let student5 = { yearOfStudying: 2, facultyName: "Philosophical" };
let student6 = { yearOfStudying: 2, facultyName: "Chemical" };
let student7 = { yearOfStudying: 4, facultyName: "Economics and management" };
let student8 = { yearOfStudying: 5, facultyName: "Philological" };
let student9 = { yearOfStudying: 3, facultyName: "Physical and technical" };
let student10 = { yearOfStudying: 2, facultyName: "Mechanical and mathematical" };

let students = []; 
students.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);

function getFacultyName(student) {
	return student.facultyName;
}

let listOfFaculties = students.map(getFacultyName).sort();
console.log(listOfFaculties);

function sumStudentsYearsOfStudying(sumYearsOfStudying, currentStudent) {
	return sumYearsOfStudying + currentStudent.yearOfStudying;
}

let totalYearsOfStudying = students.reduce(sumStudentsYearsOfStudying, 0);
console.log(totalYearsOfStudying);