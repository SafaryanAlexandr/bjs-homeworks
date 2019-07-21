function calculateMortgage() {
    let percent = window.percent.value;
    console.log(percent);
    let contribution = window.contribution.value;
    console.log(contribution);
    let amount = window.amount.value;
    console.log(amount);
    let date = window.date.value;
    console.log(date);

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";//строгий режим
    let percent = parseFloat(percent);
    if(isNaN(percent)){
        console.log(`Параметр 'Процентная ставка' содержит неправильное значение ${percent}`);
        return;
    }
    let contribution = parseFloat(contribution);
    if(isNaN(contribution)){
        console.log(`Параметр 'Начальный взнос' содержит неправильное значение ${contribution}`);
        return;
    }
    let amount = parseFloat(amount);
    if(isNaN(amount)){
        console.log(`Параметр 'Общая стоимость' содержит неправильное значение ${amount}`);
        return;
    }
    console.log(percent);
    console.log(contribution);
    console.log(amount);
    let amountBank = amount - contribution; // нужно веруть банку
    let n = Math.floor(( Date.parse(date) - Date.now()) / 2592000000);
    let P = percent / 1200; 
    let payMonth = amountBank * (P + P / (((1+P)**n) - 1));
    console.log(payMonth);
    result = payMonth *n;
    return result;

     

    // код для задачи №1 писать здесь
    //return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if(!name){
        name = 'Аноним'; // в случаи undefined или null менят имя на Аноним
    } 
    greeting =  `Привет, мир! Меня зовут ${name}.`;
    return greeting;

    // код для задачи №2 писать здесь
    //return greeting;
}