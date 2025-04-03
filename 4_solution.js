//4번 문제

class Person {
    constructor(name, hobby) {
      this.name = name;
      this.hobby = hobby;
    }
  
    getPerson() {
      console.log(`이름: ${this.name}, 취미: ${this.hobby}`);
    }
}

const p = new Person("유림"); 
console.log("이름");
console.log("취미");