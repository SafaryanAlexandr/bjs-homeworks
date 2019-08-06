class Weapon {
    constructor(name,attack,durability,range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
    takeDamage(damage) {
        if( this.durability > damage ) {
            this.durability -= damage;
        } else {
            this.durability = 0;
        }
    }
    isBroken() {
        return this.durability === 0;
    }
    get getDamage() {
        if(this.durability === 0) {
            return 0;
        } else {
            return this.attack;
        }
    }
}

const swordOld = new Weapon('Старый меч', 20, 10, 1,);
const arm = new Weapon('Рука', 1, Infinity, 1);
console.log(arm);
const bow = new Weapon('Лук', 10, 200, 3);
console.log(bow);
const sword = new Weapon('Меч', 25, 500, 1);
console.log(sword);
const knife = new Weapon('Нож', 5, 300, 1);
console.log(knife);
const staff = new Weapon('Посох', 8, 300, 2);
console.log(staff);


console.log(knife);
console.log(knife);
knife.takeDamage(300);
console.log(knife.isBroken());
console.log(arm.isBroken());
sword.takeDamage(1000);
console.log(sword);
console.log(sword.isBroken());
console.log(sword.getDamage);
bow.takeDamage(0);
console.log(bow.getDamage);

class reinforceWeapon extends Weapon {

}


//Задача №3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.registr = {
            'Algebra': [],
            'Geometry': [],
            'Physics' : []
        };
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
      if(!Object.keys(this.registr).includes(subject)){
        return console.log(`Предмет ${subject} не входит в программу обучения`);
      }
      if(grade > 0 && grade <= 5){
        return this.registr[subject].push(grade);
      } else {
        console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      }
    }
    getAverageBySubject(subject) {
      if(!Object.keys(this.registr).includes(subject)){
        return 0;
      }
      let sum = 0;
      for (let grade of this.registr[subject]) {
        sum += parseFloat(grade);
        }
        return ( sum / (this.registr[subject].length)).toFixed(2);
    }
    getTotalAverage() {
      let i = 0;
      let sumTotal = 0;
      for ( let total of Object.keys(this.registr)) {
        for (let grade of this.registr[total]) {
          sumTotal += parseFloat(grade);
          i++;
        }
      }
      return sumTotal / i;
    }
}

const log = new StudentLog('Олег');
console.log(log.getName());
console.log(log.addGrade( '5' ,'Geometry'));
console.log(log.addGrade( '5' ,'Geometry'));
console.log(log.addGrade( '5' ,'Algebra'));
console.log(log.addGrade( '3' ,'Geometry'));
console.log(log.getAverageBySubject('Geometry'));
console.log(log.getAverageBySubject('Geomtry'));
console.log(log.getTotalAverage());
