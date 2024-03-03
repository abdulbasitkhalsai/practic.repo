export{}

//Learning Typescript & Nodejs
//Q#1
//Typescript & Nodejs Installation Completed!


//Q#2
let userName = "Eric";
console.log(`Hello ${userName}!, would you like to learn some Python today`);


//Q#3
let personName : string = "Abdul Basit Khalsai";
console.log(personName.toLocaleUpperCase());
console.log(personName.toLocaleLowerCase());
//console.log(personName.toTitleCase()) //Title Case syntax issue observed.








//Q#4
console.log("Muhammad Ali Jinnah said, Failure is the word unknow to me");


//Q#5
let famous_Person : string = "Muhammad Ali Jinnah";
let message : string = `${famous_Person} said, "Failure is the word unknown to me"`;
console.log(message);


//Q#6
let mentorName = "   Sir \t Zia \n Khan"
console.log(mentorName)
console.log(mentorName.trim())


//Q#7
console.log("4 + 4 = " + (4+4))
console.log("16 - 8 = " + (16-8))
console.log("16 / 2 = " + (16/2))
console.log("4 * 2 = " + (4*2))


//Q#8
console.log(4+4)
console.log(5+3)
console.log(6+2)
console.log(7+1)

//Q#9
let favouriteNumber : number = 26
let message1 = `My favourite Number is ${favouriteNumber}`
console.log(message1)


//Q#10
//Q#1: Have sucessfully commpleted installation of Node.js, Typescript & VS Code with extension of Typescript
//Q#2: Using Template Literal a Personal Message was programmed where name is stored in variable
//Q#3: Modifying case of string
//Q#4: Quote has been programmed as string
//Q#5: Print message using variable for quote & Author Name


//Q#11
let names: string[] = ["Muhammad Mumtaz", "Ahmed Raza", "Muhammad Faizan", "Muhammad Salman", "Muhammad Irfan"]
for  (var index in names) {
    console.log(names[index])
}


//Q#12
for (var index in names) {
    console.log(`Hello! Mr. ${names[index]}, How are you?`)
}

//Q#13
let modeOfTransport: string[] = ["Honda Civic", "Toyota Yaris", "BRV", "V8"]
for (var index in modeOfTransport) {
    console.log(`I would like to own a ${modeOfTransport[index]}`)
}

//Q#14
let guestName: string[] = ["Ali", "Ahmed", "Adnan", "Shakir", "Sabir", "Naveed"]
for (var index in guestName) {
    console.log(`Dear Mr. / Mrs. ${guestName[index]}, You are invited to have a dinner with us at Governor House on Sunday Feb 25, 2024 at sharp 9:00 PM.`)
}


//Q#15
let updatedGuestName = guestName.splice(0,1, "Arif", "Shams")

//Q#15.1
for (var index in updatedGuestName) {
    console.log(`Mr. ${updatedGuestName} isn't intrested to attend dinner at Governor House on Sunday`)
}
for (var index in guestName) {
    console.log(`Dear Mr. / Mrs. ${guestName[index]}, You are invited to have a dinner with us at Governor House on Sunday Feb 25, 2024 at sharp 9:00 PM.`)
}



//Q#16

console.log("Typescript")