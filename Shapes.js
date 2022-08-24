class Shape {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d")
    }
    area() {
        return 0;
    }
  
    perimeter() {
      return 0;
    }
  
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }

    imprimir() {
        console.log(`Figura: ${this.toString()} - Area: ${this.area()} - Perimeter: ${this.perimeter()}`)
    }
    dibujar(){
        return 0
    }
}
  
class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}
  
class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }
    dibujar(x=0, y=0){
        this.ctx.fillRect(x, y, this.width, this.height)
    }
}
  
class Square extends Rectangle {
    constructor(l) {
        super(l, l);
    }
}
  
class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}

class Paralelogramo extends Rectangle{
    constructor(w, h){
        super(w, h)
    }
}
class Rombo extends Rectangle{
    constructor(w, h, lado1, lado2, lado3, lado4){
        super(w, h)
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
        this.lado4 = lado4;
    }
    area(){
        const diagonalMayor = this.height;
        const diagonalMenor = this.width;
        return diagonalMayor * diagonalMenor / 2;
    }
    perimeter(){
        return this.lado1 + this.lado2 + this.lado3 + this.lado4 
    }
}
export {Circle, Rectangle, Square, Triangle, Paralelogramo, Rombo};



