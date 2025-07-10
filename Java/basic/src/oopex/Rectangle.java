package oopex;

import java.util.Objects;

public class Rectangle extends Shape implements GeometricObject {
	protected double width;
	protected double height;

	public Rectangle(double width, double height) {
		this.width = width;
		this.height = height;
	}

	@Override
	double calcArea() {
		return this.width * this.height;
	}

	@Override
	public double calcPerimeter() {
		return (this.width + this.height) * 2;
	}

	@Override
	public String toString() {
		return "Rectangle{" +
			"width=" + width +
			", height=" + height +
			'}';
	}

	@Override
	public boolean equals(Object o) {
		if (o == null || getClass() != o.getClass())
			return false;
		Rectangle rectangle = (Rectangle)o;
		return Double.compare(calcArea(), rectangle.calcArea()) == 0;
		// && Double.compare(height, rectangle.height) == 0;
	}

	@Override
	public int hashCode() {
		return Objects.hash(width, height);
	}

	public static void main(String[] args) {

	}
}
