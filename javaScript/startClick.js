const n1Ele =document.getElementById("n1");
const n2Ele =document.getElementById("n2");
const resEle = document.getElementById("result");
const readValues = ()=>{
    const n1 =Number(n1Ele.value);
    const n2 =Number(n2Ele.value);
    return [n1,n2];
}
const sum = () =>{
    const [n1,n2]= readValues();
    const result = n1+n2;
    resEle.innerText ="= " + result;
    resEle.style.backgroundColor ='green'
    // resEle.classList.add('bordered');
    resEle.classList.toggle('bordered');
    resEle.addEventListener('mouseover',print)
}
const sub = () =>{
    const [n1,n2]= readValues();
    const result = n1-n2;
    resEle.innerText ="= " + result;
    resEle.style.backgroundColor ='blue'
}
const mult = () =>{
    const [n1,n2]= readValues();
    const result = n1*n2;
    resEle.innerText ="= " + result;
    resEle.style.backgroundColor ='yellow'
}
const div = () =>{
    const [n1,n2]= readValues();
    const result = n1/n2;
    resEle.innerText ="= " + result;
    resEle.style.backgroundColor ='red'
}
const print = () =>{
    console.log("Hello " +Date.now());
}
// const calc = (e) =>{
    //     e.preventDefault();
    //     console.log(e);
    //     const n1 =Number(e.target["n1"].value);
    //     const n2 =Number(e.target["n2"].value);
    //     const op =e.submmiter.id;
    //     let res;
    //     switch (op) {
        //         case "+":
        //             res =n1+n2;
        //             break;
        //         case "+=-":
        //             res =n1-n2;
        //             break;
//         case "*":
//             res =n1*n2;
//             break;
//         case "/":
//             res =n1/n2;
//             break;
//     }
//     console.log("Result From calc: " + res);
// }

const box = document.getElementById("myDiv");

box.addEventListener("mouseover", ()=>{
    box.textContent = box.textContent === "Hi" ? "Bye" : "Hi";

    const randomX = Math.random()* (window.innerWidth - box.offsetWidth);
    const randomY = Math.random()* (window.innerWidth - box.offsetHeight);

    box.style.left = `${randomX}px`;
    box.style.left = `${randomX}px`;
    box.style.backgroundColor =`#${Math.floor(Math.random()* 16777215).toString(16)}`;
})