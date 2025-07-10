// package oopex;
//
// // public class AppShape<T extends Shape & GeometricObject> {
// public class AppShape<T extends Shape> {
// 	private T shape;
//
// 	public AppShape(T shape) {
// 		this.shape = shape;
// 	}
//
// 	public double calcArea() {
// 		return shape.caclArea();
// 	}
//
// 	public double calcPerimeter() {
// 		if (shape instanceof GeometricObject) {
// 			return ((GeometricObject)shape).calcPerimeter();
// 		}
// 		throw new IllegalArgumentException("Cannot calcPerimeter" + getShapeName());
// 	}
//
// 	public String getShapeName() {
//
// 	}
// }
