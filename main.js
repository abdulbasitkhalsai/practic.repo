"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Learning Typescript & Nodejs
//Q#1
//Typescript & Nodejs Installation Completed!
//Q#2
var userName = "Eric";
console.log("Hello ".concat(userName, "!, would you like to learn some Python today"));
//Q#3
var personName = "Abdul Basit Khalsai";
console.log(personName.toLocaleUpperCase());
console.log(personName.toLocaleLowerCase());
//console.log(personName.toTitleCase()) //Title Case syntax issue observed.
//Q#4
console.log("Muhammad Ali Jinnah said, Failure is the word unknow to me");
//Q#5
var famous_Person = "Muhammad Ali Jinnah";
var message = "".concat(famous_Person, " said, \"Failure is the word unknown to me\"");
console.log(message);
//Q#6
var mentorName = "   Sir \t Zia \n Khan";
console.log(mentorName);
console.log(mentorName.trim());
//Q#7
console.log("4 + 4 = " + (4 + 4));
console.log("16 - 8 = " + (16 - 8));
console.log("16 / 2 = " + (16 / 2));
console.log("4 * 2 = " + (4 * 2));
//Q#8
console.log(4 + 4);
console.log(5 + 3);
console.log(6 + 2);
console.log(7 + 1);
//Q#9
var favouriteNumber = 26;
var message1 = "My favourite Number is ".concat(favouriteNumber);
console.log(message1);
//Q#10
//Q#1: Have sucessfully commpleted installation of Node.js, Typescript & VS Code with extension of Typescript
//Q#2: Using Template Literal a Personal Message was programmed where name is stored in variable
//Q#3: Modifying case of string
//Q#4: Quote has been programmed as string
//Q#5: Print message using variable for quote & Author Name
//Q#11
var names = ["Muhammad Mumtaz", "Ahmed Raza", "Muhammad Faizan", "Muhammad Salman", "Muhammad Irfan"];
for (var index in names) {
    console.log(names[index]);
}
//Q#12
for (var index in names) {
    console.log("Hello! Mr. ".concat(names[index], ", How are you?"));
}
//Q#13
var modeOfTransport = ["Honda Civic", "Toyota Yaris", "BRV", "V8"];
for (var index in modeOfTransport) {
    console.log("I would like to own a ".concat(modeOfTransport[index]));
}
//Q#14
var guestName = ["Ali", "Ahmed", "Adnan", "Shakir", "Sabir", "Naveed"];
for (var index in guestName) {
    console.log("Dear Mr. / Mrs. ".concat(guestName[index], ", You are invited to have a dinner with us at Governor House on Sunday Feb 25, 2024 at sharp 9:00 PM."));
}
//Q#15
var updatedGuestName = guestName.splice(0, 1, "Arif", "Shams");
//Q#15.1
for (var index in updatedGuestName) {
    console.log("Mr. ".concat(updatedGuestName, " isn't intrested to attend dinner at Governor House on Sunday"));
}
for (var index in guestName) {
    console.log("Dear Mr. / Mrs. ".concat(guestName[index], ", You are invited to have a dinner with us at Governor House on Sunday Feb 25, 2024 at sharp 9:00 PM."));
}
//Q#16
console.log("Typescript");
