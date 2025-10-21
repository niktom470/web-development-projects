// function changeText() {
// let fpara=document.getElementById('fpara');
// fpara.textContent ="Hello Nikhil"
// }

// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changeText);
// // fpara.removeEventListener('click',changeText);
// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorElement.textContent = "cl ick done bhai"
// });
// console.log("hi");
// let paras=document.getElementById('wrappar');
// function alertPara(event){
//     if(event.target.nodeName === 'SPAN'){alert("You have Clicked on para: " + event.target.textContent);}
    
// }
// paras.addEventListener('click',alertPara);
// const t1 = performance.now();
// console.log(t1);
// for(let i=0;i<100;i++){
//     let para = document.createElement('p');
//     para.textContent="this is para "+i;
//     document.body.appendChild(para);
// }
// const t2 = performance.now();
// console.log("total mydiv " +(t2-t1));
// const t3 = performance.now();
// let mydiv = document.createElement('p');

// document.body.appendChild(mydiv); 
// const t4 = performance.now();
// console.log("total mydiv " +(t4-t3));

// let fragment =document.createDocumentFragment();
// const t3 = performance.now();
// for(let i=0;i<100;i++){
//     let para = document.createElement('p');
//     para.textContent="this is para "+i;
//     fragment.appendChild(para);
// }
// document.body.appendChild(fragment); 
// const t4 = performance.now();
// console.log("total mydiv " +(t4-t3));

// let promise1 = new Promise((resolve, reject)=>{
//     let success = true;
//     if(success){
//         resolve("Promise Fullfilled");
//     }
//     else{
//         reject("Promise rejected");
//     }
// });
// promise1.catch((message)=>{
//   console.log("First msg "+message);
//   return"Promise fulfilled second message";
// }).then((message)=>{
//   console.log(" second  msg "+message);
//   return"Promise fulfilled third message";
// }).then((message)=>{
//   console.log("third msg "+message);
  
// })
// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside set timeout block");
//     },3000);
    
// }

// let output= getData();

// async function getData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//     let data = await response.json();
//     console.log(data);
// }
// getData();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "POST",
  body: JSON.stringify({ username: "Nikhil Tomar" }),
  headers: myHeaders,
};

async function getData(){
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response : ",data);
}
async function postData(){
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("post data response : ",data);
}
async function processData() {
  await postData();
  await getData();

}

// getData();