const arr =[];
const arr2 =[1,2,3,4,5,6,'GPA: 91',true,{x:20},['a','b']];
// const arr2 =[]
arr[0]="ahmad";
arr[1]="Omar";
console.log(arr);
console.log(arr2);
const x = arr2[2];
console.log(x);
// =======================
const y=arr2.at(4);
console.log(y);
const arr3 = arr.concat(arr2);
console.log(arr3);
const arr4 =new Array(1000).fill('a',0,1000);
arr2.push('zzzz');
arr2.unshift('sdf');
console.log(arr2);
////////////////////////////
function sum(n1,n2){//parameter
    const sum = n1+n2;
    return sum;
}
const result = sum(2,25);//argument
console.log(result);
document.write(result);
const divide = (n1,n2)=>{
    if (n2 != 0) return n1/n2;
    return 'None';
}
const result2 = divide(10,5);
document.write(' ' + result2);
const printStart = () => {console.log("Hello World")}
const HelloWorld = printStart();
console.log(HelloWorld);
const name =['ahmad','hiba','jad'];
const newnames = name.map((name, index) => `${index} : ${name.length}` );
console.log(newnames);