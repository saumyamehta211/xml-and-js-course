const timeout = (ms = 3000) => 
  new Promise((resolve)=> setTimeout(resolve,ms));
  
const inc =  (a) => {
  return new Promise((resolve)=> timeout().then(() => resolve(a+1)))
}

const sum = (a,b) => {
  return new Promise((resolve)=> timeout().then(() => resolve(a+b)))
};

const max = (a, b) => {
  return new Promise((resolve)=> timeout().then(() => resolve(a > b ? a : b)));
}

const avg = (a, b) => {
  return new Promise((resolve)=> timeout().then(() => sum(a, b)).then((s)=>resolve(s/2)));
} 

const obj = {
  name: "Marcus Aurelius",
  split(sep = " ") {
    return new Promise((resolve)=> timeout().then(() => resolve(this.name.split(sep))));
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }
  
  static of (name) {
    return new Promise((resolve)=> timeout().then(() => resolve(new Person(name))));
  }

  split(sep = " ") {
    return new Promise((resolve)=> timeout().then(() => resolve(this.name.split(sep))));
  }
}

const main = async () => {
  try {
    const person = await Person.of("Marcus Aurelius");
    console.log("inc(5) =", await inc(5));
    console.log("sum(1, 3) =", await sum(1, 3));
    console.log("max(8, 6) =", await max(8, 6));
    console.log("avg(8, 6) =", await avg(8, 6));
    console.log("person.split() =", await person.split());
    console.log("obj.split() =", await obj.split());
  } catch (error) {
    console.error(error);
  }
};

main();
