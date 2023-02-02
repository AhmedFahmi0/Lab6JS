function Shape(name,sides,sideLength) 
{
    this.name = name||'Shape';
    this.sides = sides||0;
    this.sideLength = sideLength||0;
}
  
Shape.prototype.calcPerimeter = function ()
{
    let perimeter = this.sides * this.sideLength;
    console.log(`Perimeter: ${perimeter}`);
};


function Square(sideLength) 
{
   Shape.call(this,'Square',4,sideLength);
}
Square.prototype = new Shape();
Square.constructor=Square;
Square.prototype.calcArea=function(){ console.log(`Area: ${this.sideLength * this.sideLength}`)}
let square = new Square(5);
square.calcArea();
square.calcPerimeter();