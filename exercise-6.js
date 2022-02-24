class Circle {
	constructor(radius) {
		this.radius = radius;
	}
}

class Square {
	constructor(side) {
		this.side = side;
	}
}
class Rectangle {
	constructor(width,height) {
		this.width = width;
        this.height=height;
	}
}


class AreaCalculator {
	constructor(shapes) {
		this.shapes = area;
	}

	static calculate(area) {
		
			if (area instanceof Square) {
				return area.side * area.side;
			} else if (area instanceof Circle) {
				return Math.PI * (area.radius * area.radius)
			}
            else if (area instanceof Rectangle) {
				return area.height * area.width
			}
            
            else {
				throw new Error('Not a supported shape');
			}
		

		return this.calculate()
	}


}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
	
	
