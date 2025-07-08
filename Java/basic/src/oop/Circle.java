package oop;

public class Circle {    // package 종속 -> public, default만 가능
	private double radius = 1.0;
	private String color = "red";

	public Circle() {    //instance화 막을때 public을 안쓸때가 있긴함
	}

	public Circle(double radius) {
		this.radius = radius;
	}

	public double getRadius() {
		return this.radius;
	}

	public String getColor() {    // 서순은 get 아래 set으로
		return color;    //this를 붙이지 않아도됨(안헷갈리면)
	}

	public String setColor(String color) {
		this.color = color;
	}

	public double getArea() {
		return radius * radius * Math.PI;
	}

	@Override
	public String toString() {
		return "Circle{" +
			"radius=" + radius +
			", color='" + color + '\'' +
			", area='" + getArea() + '\'' +
			'}';
	}

	public static void main(String[] args) {
		Circle circle = new Circle(radius: 2);
		System.out.println("circle = " + circle);

	}
}
