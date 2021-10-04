class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.marbleCount = 100;
  }
 
  status() {
    console.log(`Player: ${this.name} -- Marbles Left: ${this.marbleCount}`)
  }

  gettingHit(){
    this.marbleCount = this.marbleCount - this.hitsPerMinute;
  }
}

function everyMinutes(p1, p2){
    p1.gettingHit();
    p2.gettingHit();
}

function marbleAttack(p1, p2){
  for(i = 0; i < 10; i++){
    everyMinutes(p1, p2)
  } 

  if(p1.marbleCount == p2.marbleCount){
    return "tie";
  } else if(p1.marbleCount < p2.marbleCount){
    return p1.name;
  } else {
    return p2.name;
  }
}

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);
 
console.log(marbleAttack(p1, p2)); // return p1

const p3 = new Player('p1', 5);
const p4 = new Player('p2', 5);
 
console.log(marbleAttack(p3, p4)); // return Tie

const p5 = new Player('p5', 2);
const p6 = new Player('p6', 5);
 
console.log(marbleAttack(p5, p6)); // return p6

