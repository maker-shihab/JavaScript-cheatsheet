// Class 
// Basic Classes Example

// class Friends {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     present(){
//         return `He is ${this.name}, and his age is ${this.age} years old.`;
//     }
// }

// const friend1 = new Friends('Rohim', 24);
// const friend2 = new Friends('Professor', 23);
// console.log(friend1.present());
// console.log(friend2.present());

class Friends {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    present(){
        return `Meet my friend ${this.name}, and his age is ${this.age} years old.`;
    }
}

const friendArr = ['Alif', 'Rohim', 'Khalek', 'Baker'];

for(i = 0; i<friendArr.length; i++){
    const friend = new Friends(friendArr[i], 24 + i);
    console.log(friend.present());
}


// আমি এখানে আমার বাড়ি এবং গারি ভারা নির্ধারণ করলাম। 

class Bari {
    constructor(location) {
        this.myLocation = location;
    }
    present() { // Present একটি Methord
        return `Amar Bari ${this.myLocation}`
    }
}

class GariVara extends Bari {
    constructor(location, vara) {
        super(location);
        this.model = vara;
    }
    show(){ // Show একটি Methord
        return `${this.present()} abong jawar vara ${this.model}`
    }
}

let bariJawarVara = new GariVara("Thakurgaon", "950tk");
console.log(bariJawarVara.show());

// এখানে Bari এবং GariVara দুইটি Class যা মূলত আমার বাড়ি এবং যাওয়ার ভারা নির্ধারণ করে


// Static Class

class MyName {
    constructor(name){
        this.name = name;
    }
    static hello(x) {
        return `Hello!! ${x.name}`;
    }
}

let amarName = new MyName("Maker Shihab");
console.log(MyName.hello(amarName));


// Advance Concept

class Shape {
    constructor(color) {
        this.color = color;
    }

    getArea(){
        throw new Error(`getArea() method must be implemeted`);
    }

    toString(){
        return `This shape sah a color ${this.color}`;
    }
}

class Circle extends Shape {
    constructor(color, radious) {
        super(color);
        this.radious = radious;
    }

    getArea() {
        return Math.PI * this.radious ** 2
    }

    toString() {
        return `${super.toString()} and a radious of ${this.radious}`
    }
}


class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `${super.toString()}, width of ${this.width}, and height of ${this.height}`
    }
}

// Usage Example 

const circle = new Circle('red', 5);

console.log(circle.toString());
console.log('Area:', circle.getArea());

const rectangle = new Rectangle('blue', 6, 4);
console.log(rectangle.toString());
console.log('Area:', rectangle.getArea());