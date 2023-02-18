function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark() {
      console.log(this.name + ':멍멍!!')
    }
  }
}

const blackDog = new BlackDog();
blackDog.bark();

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ':멍멍!!')
    }
  }
}
const whiteDog = new WhiteDog();
whiteDog.bark();
