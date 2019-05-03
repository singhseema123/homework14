// 1. A jungle contains several species of animals: tigers, monkeys and snakes.
// 2. All animals can do three things: make a sound, eat food, and sleep.
// 3. Each species of animal knows how many others of its kind exist (think global values)
// 4. By default when an animal's energy level changes, it changes in the following ways:
//   a. -3 for making a sound
//   b. +5 for eating food
//   c. +10 for sleeping

var tigerCount=0;
var monkeyCount=0;
var snakeCount=0;
class Animals
{
  constructor()
  {
    this.energy=0;
    this.tired=true;
  }
  
  makeASound()
  {
    this.energy -= 3;
  }
  
  eatFood()
  {
    this.energy += 5;
    this.tired = false;
  }

  sleep()
  {
    this.energy += 10;
    this.tired = false;
  }
  showEnergy()
  {
      return this.energy;
  }
}

class Tigers extends Animals
{
    constructor()
    {
        super();
        tigerCount++;
    }
    sleep()
    {
        this.energy += 5;
        this.tired = false;
    }
    makeASound()
    {
        super.makeASound();
        console.log("Roarrrrrr");
    }
    eatFood(type)
    {
        super.eatFood();
        if (type === 'grain')
        {
            // Tigers cant digest grain
            console.log("i'm going to be sick!");
        }
    }
}
class Monkeys extends Animals
{
    constructor()
    {
        super();
        monkeyCount++;
    }
    eatFood()
    {
        this.energy += 2;
        this.tired = false;
    }
    makeASound()
    {
        this.energy -= 4;
        console.log("oo oo aa aa");
    }
    play()
    {
        // Only monkeys can play. When they do they say "Oooo Oooo Oooo" and get -8 energy.
        // If a monkey doesn't have enough energy to play they say "Monkey is too tired".
        if (this.energy > 8)
        {
            console.log("ooo ooo oooo oooo");
            this.energy -= 8;
        }
        else  
        {
            console.log("Monkey is too tired");
            this.tired = true;
        }
    }
}

class Snakes extends Animals
{
    constructor()
    {
        super();
        snakeCount++;
    }
    makeASound()
    {
        super.makeASounds();
        console.log("hisssssss");
    }
}



const soundOff = function()
{
  monkey1.makeASound();
  console.log("Monkey 1 energy: " + monkey1.showEnergy());
  tiger1.makeASound();
  console.log("Tiger 1 energy: " + tiger1.showEnergy());
  tiger2.makeASound();
  console.log("Tiger 2 energy: " + tiger2.showEnergy());
  tiger3.makeASound();
  console.log("Tiger 3 energy: " + tiger3.showEnergy());
}

const tiger1 = new Tigers();
tiger1.eatFood('grain');
const tiger2 = new Tigers();
const tiger3 = new Tigers();

tiger3.sleep();
console.log("Tiger3 energy: " + tiger3.showEnergy());
console.log("Number of tigers: " + tigerCount);

const monkey1 = new Monkeys();
console.log("Number of monkeys: " + monkeyCount);
monkey1.sleep();
while (!monkey1.tired)
    monkey1.play();

soundOff();