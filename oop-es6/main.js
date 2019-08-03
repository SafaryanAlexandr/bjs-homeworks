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
