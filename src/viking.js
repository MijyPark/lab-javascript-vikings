// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
   attack() {
    return this.strength;

}
   receiveDamage(damage) {
    this.damage = damage;
    this.health  -= damage;
   }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
  attack() { 
    return this.strength;
    } 

  receivedDamage(damage) {
    this.health = newHealth;
    if (newHealth > this.damage) {
        return `'${this.name} has received ${this.damage} points of damage.'`;
    } else {
        return `'${this.name} has died in act of combat.'`;
    }
   }
  battleCry() {
    return "Odin Owns You All!";
   }
}
// Saxon
class Saxon extends Viking {
  constructor(health, strength) {
    super(name,health, strength);
  }
}

// War
class War {}
