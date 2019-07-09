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