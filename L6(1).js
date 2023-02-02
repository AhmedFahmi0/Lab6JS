function Shape(name,sides,sideLength) 
{
  this.name = name||'Shape';
  this.sides = sides||0;
  this.sideLength = sideLength||0;
}

Shape.prototype.calcPerimeter = function () 
{
  let perimeter = this.sides * this.sideLength;
  console.log(`Perimeter of ${this.name}: ${perimeter}`);
};
  
let square = new Shape("Square", 4, 5);
let triangle = new Shape("Triangle", 3, 3);
  
square.calcPerimeter();
triangle.calcPerimeter();