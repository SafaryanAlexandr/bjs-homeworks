

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let discriminant = b*b - 4*a*c;
    let x = [];
    if (discriminant === 0) {
        x[0] = -b/(2*a);
    } else if (discriminant > 0){
        x[0] = (-b + Math.sqrt(discriminant)) / (2*a);
        x[1] = (-b - Math.sqrt(discriminant)) / (2*a);
    }
    return x;
}
function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let dateNow = Date.now();
    let old = Math.floor((dateNow - dateOfBirthday)/31536000000); 
    let result;
    if (old > 18) {
        result = 'Не желаете ли олд-фэшн, ' + name + ' ?';
    } else {
        result = 'Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!';
    }
    console.log(result);
    return result;
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length > 5) {
        marks = marks.slice(0,5);
    }
    let total = 0;
    let average;
    for (let i=0; i < marks.length; i++) {
        total = total + marks[i];
    }  
    average = total / marks.length;
    return average;
}