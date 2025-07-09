package oopex;

public class Circle extends Shape implements GeomericObject {
	protected double radious = 1.0;

	public Circle(double radious) {
		this.radious = radious;
	}

	@Override
	double calArea() {
		return radious * radious * Math.PI;
	}

	@Override
	public double getPerimeter() {
		return radious * 2 * Math.PI;
	}

	@Override
	public String toString() {
		return "Circle{" +
			"radious=" + radious +
			'}';
	}

	public static void main(String[] args) {

	}
}
