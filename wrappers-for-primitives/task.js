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
    if(Number.isNaN(percent)){
        console.log(`Задайте параметр 'Процентная ставка'`);
        return;
    }
    if(Number.isNaN(contribution)){
        console.log(`Задайте параметр 'Начальный взнос'`);
        return; 
    }
    if(Number.isNaN(amount)){
        console.log(`Задайте параметр 'Общая стоимость'`);
        return; 
    }
    if (typeof percent !== 'number') {
        console.log(`Параметр 'Процентная ставка' содержит неправильное значение ${percent}`);
        return;
    }
    if (typeof contribution !== 'number') {
        console.log(`Параметр 'Начальный взнос' содержит неправильное значение ${contribution}`);
        return;
    }
    if (typeof amount !== 'number') {
        console.log(`Параметр 'Общая стоимость' содержит неправильное значение ${amount}`);
        return;
    }
    let amountBank = amount - contribution; // нужно веруть банку
    let payMonth = amountBank
     

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
    if(name.length === 0){
        greeting =  'Привет, мир! Меня зовут Аноним.';
    } else {
        greeting =  `Привет, мир! Меня зовут ${name}.`;
    }
    return greeting;

    // код для задачи №2 писать здесь
    //return greeting;
}