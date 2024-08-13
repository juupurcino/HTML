// let x = 1;

// var list = [1, 2, 3];
// list.push(1);
// let v = list[0];


// let dicionary = {
//     valor : 3, 
//     ju : purcino, 
//     x : {x : [123]}
// }; 

// dicionary.batata = 4;

// if (x > 0){

// }else{  

// }

// for (let i = 0; i < 10; i++) {
    
// }

// console.log("oi");
// alert("Olá");

// function soma(a , b , c) {
//     return a + b + c ;   
// }

// const func = function(a, b, c){
//     return a + b + c;
// }

// soma(1, 2, 3);
// func(1, 2, 3);

// let sum = (a, b) => a + b;                                                                                                                                                                   

// setTimeout(() => {
//     alert("bão")   
// },5000);

// setInterval(() => {
//     alert("bão") 
// },3000);

// list.forEach(x => { soma += x});

// const myFunc = () => alert("Olaa");

// let elemento = document.getElementById("number");
// x.innerHtml = "ola";


let data = [
    {
        nome: "cachorro-quente",
        valor: 22
    },
    {
        nome: "strognoff",
        valor: 30
    }
]

const load = () => {

    let comida = document.getElementById("comida");

    let nome = document.getElementById('nome')
    let valor = parseInt(document.getElementById('valor').value)
    data.push({nome: nome.value, valor: valor});
    nome.value = ""
    valor = 0
    
    let obj = document.getElementById('number')
    obj.innerHTML = ""
    data.forEach(comida => {
        obj.innerHTML += `<h1>${comida.nome}</h1>`
        obj.innerHTML += `<h3>${comida.valor + comida.valor}</h3>`
    })
}

load();