function getSolutions(a,b,c) {
    let D = Math.pow(b,2) - 4*a*c;
    if (D < 0) {
        return { D : D };
    }
    else if (D === 0) {
        let x1 = -b/(2*a); 
        return {
            roots :  x1,
            D : D
        };
    }
    else {
        let x1 = (-b + Math.sqrt(D))/(2*a) ,
        x2 = (-b - Math.sqrt(D))/(2*a);
        return {
            roots : [ x1, x2 ],
            D : D 
        };
    } 
}
function showSolutionMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    }
    else if(result.D === 0) {
        console.log(`Уравнение имеет один корень X₁=${result.roots}`);
    }
    else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}
showSolutionMessage(1,2,3);
showSolutionMessage(7,20,-3);
showSolutionMessage(2,4,2);


// задача №2
function getAverageScore() {
    let data = {
        algebra: [2,4,5,2,3,4],
        geometry: [2,4,5],
        russian: [3,3,4,5],
        music: [4,4,5]
    };    
    function calculationAverage (object) {
        let totalMark = 0;
        let numberMark = 0;
        let result = {};
        for (let subject in data) {
            let sumMark = 0;
            let averageMarkSubject;
            for (let i=0; i < data[subject].length; i++) {
                sumMark = sumMark + data[subject][i];//сумма оценок по предмету
                numberMark++;//счетчик оценок общий
            } 
            totalMark = totalMark + sumMark;//сумма всех оценок
            averageMarkSubject = sumMark / data[subject].length;//Средняя оценка по предмету
            result[subject] = averageMarkSubject; 
        }
        let averageAll = (totalMark / numberMark).toFixed(1);//строка
        result.average = averageAll;
        console.log(result);
    }
    calculationAverage(data);
 }
 getAverageScore();

 //задача №3
 
function decipher(secretData){
    let result = {};
    if (secretData.aaa == 0) {
      result.firstName = 'Родриго';
    }
    else if(secretData.aaa == 1) {
      result.firstName = 'Эмильо';
    }
    if (secretData.bbb == 0) {
      result.lastName = 'Родриго';
    } 
    else if (secretData.bbb == 1) {
      result.lastName = 'Эмильо';
    }
    return result;
 }
console.log(decipher({aaa:1,bbb:1}));