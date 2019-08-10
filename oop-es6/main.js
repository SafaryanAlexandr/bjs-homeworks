//Задача №1 
class Weapon {
    constructor({name,attack,durability,range}){
      this.name = name;
      this.attack = attack;
      this.durabilityBase = durability;
      this.range = range;
      this.durability = durability;
    }
    takeDamage(damage) {
        if( this.durabilityBase > damage ) {
            this.durability -= damage;
        } else {
            this.durability = 0;
        }
    }
    isBroken() {
        return this.durability === 0;
    }
    getDamage() {
      if( this.durability >= 0.3 * this.durabilityBase ) {
         return this.attack;
        } 
      else if ( this.durability === 0) {
        return 0;
        }
      else {
        return this.attack / 2;
      }
    }
}
const swordm = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});
console.log(swordm);

swordm.takeDamage(5);
console.log(swordm.durability); // 5

swordm.takeDamage(50);
console.log(swordm.durability); // 0

const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(bow.isBroken()); // false

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  durability: 500,
  range: 1,
});
const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  durability: 300,
  range: 1,
});
const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  durability: 300,
  range: 2,
});
const longBow = new Weapon({
  name: 'Длинный лук',
  attack: 15,
  durability: 200,
  range: 4,
});
const axe = new Weapon({
  name: 'Меч',
  attack: 27,
  durability: 800,
  range: 1,
});
const staffStorm = new Weapon({
  name: 'Посох бури',
  attack: 10,
  durability: 300,
  range: 3,
});
//Задача №2

class Arm  extends Weapon {
    constructor() {
      super({ attack: 1, durability: Infinity, range: 1,})
      this.name = 'Рука';
    }
}
const armLeft = new Arm ();

class Bow extends Weapon {
    constructor() {
      super({ attack: 10, durability: 200, range: 3,})
      this.name = 'Лук';
    }
}
const bowBase = new Bow ();
console.log(bowBase.name); // Лук
console.log(bowBase.attack); // 10
console.log(bowBase.durability); // 200
console.log(bowBase.range); // 3

class Sword extends Weapon {
    constructor() {
      super({ attack: 25, durability: 500, range: 1,})
      this.name = 'Меч';
    }
}

class Knife extends Weapon {
    constructor() {
      super({ attack: 5, durability: 300, range: 1,})
      this.name = 'Нож';
    }
}

class Staff extends Weapon {
    constructor() {
      super({ attack: 8, durability: 300, range: 2,})
      this.name = 'Посох';
    }
}
class LongBow extends Bow {
    constructor() {
      super()
      this.name = 'Длинный лук';
      this.attack = 15;
      this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
      super()
      this.name = 'Секира';
      this.attack = 27;
      this.durability = 800;
    }
}

class StaffStorm extends Staff {
    constructor() {
      super()
      this.name = 'Посох Бури';
      this.attack = 10;
      this.range= 3;
    }
}

const stormStaff = new StaffStorm();
console.log(stormStaff);



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
