import {Circle, Rectangle, Square, Triangle, Paralelogramo, Rombo} from './Shapes.js';


const triangle = new Triangle(10, 5);
const triangle2 = new Triangle(9, 19);
console.log(triangle.area());
console.log(triangle2.area());

const square = new Square(10);
square.imprimir()

const rectangle = new Rectangle(80, 60);
rectangle.imprimir()
rectangle.dibujar();

const circle = new Circle(10);
circle.imprimir()

const romboide = new Paralelogramo(10, 20)
romboide.imprimir()

const rombo = new Rombo(20, 20, 10,10,10,30)
rombo.imprimir()