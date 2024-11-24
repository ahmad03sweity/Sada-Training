const sturdents = [
    {
        name:"Ahmad",
        age : 21,
        isGraduated: false,
        city: "Dura"
    },
    {
        name:"Khaldoon",
        age : 30,
        isGraduated: true,
        city: "Hebron"
    },
    {
        name:"Omar",
        age : 20,
        isGraduated: false,
        city: "Ramallah"
    }
]
const printReport = (studentObject) =>{
    const msg =`hello ${sturdents.name} with age ${sturdents.age} and ${sturdents.isGraduated ? '' :' not'} graduated <br/>`;
    document.write(msg);
}
alert("Welcome to the nothing app!");
let userName = localStorage.getItem("user");
if(!userName){
    userName = window.prompt("Please enter your name") || "No Name"; //login user
}
localStorage.setItem("user",userName);
const name = window.prompt("Please Enter You're Name:");
document.write(`Hello ${name}`);
document.write(`List of students:`);
sturdents.forEach(std =>{
    printReport(std);
})
confirm("Do you want to delete the last student?");
sturdents.pop();
// console.log(JSON.stringify(sturdents,null,2));
// sturdents.pop();
// console.log(JSON.stringify(sturdents,null,2));