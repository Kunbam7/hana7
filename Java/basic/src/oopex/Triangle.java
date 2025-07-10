package oopex;

public class Triangle extends Shape implements GeometricObject {
	protected double height;
	protected double base;

	public Triangle(double height, double base) {
		this.height = height;
		this.base = base;
	}

	@Override
	public double calcPerimeter() {
		double side = Math.sqrt(Math.pow(base / 2, 2) + Math.pow(height, 2));
		return base + 2 * side;
	}

	@Override
	double calcArea() {
		return height * base / 2;
	}

	@Override
	public String toString() {
		return "Triangle{" +
			"height=" + height +
			", base=" + base +
			'}';
	}
}
