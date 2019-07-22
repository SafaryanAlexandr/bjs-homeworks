function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
    let birthdayUTC = Date.parse(birthday);
    let diff = now - birthdayUTC;
    let age18 = 567648000000; //18лет в миллисекундах
    if(diff > age18) {
        return result = 1;
    }
    
    // код для задачи №1 писать здесь
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if(typeof animal === 'undefined') {
        return null;
    }
    return sound;
    // код для задачи №2 писать здесь
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let total = 0;
    let roundedAverage;
    for (let i=0; i < marks.length; i++) {
        total = total + parseInt(marks[i]);
        console.log(total);
    }  
    roundedAverage = Math.round(total / marks.length);
    return roundedAverage;
    // код для задачи №3 писать здесь
}