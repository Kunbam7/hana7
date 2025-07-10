package oopex;

public class ShapeMain {
	public static void main(String[] args) {
		long startTimeMs = System.currentTimeMillis();
		long startTime = System.nanoTime();

		// java.base equal
		Circle circle = new Circle(3);
		Circle circle1 = new Circle(3);
		System.out.println(circle.equals(circle1));

		Rectangle r1 = new Rectangle(2, 6);
		Rectangle r2 = new Rectangle(3, 4);
		Rectangle r3 = new Rectangle(2, 4);
		if (r1.equals(r2)) {
			System.out.println("r1과 r2가 각각 참조하는 두 사각형의 면적이 같음.");
		}

		ResizableCircle resizableCircle = new ResizableCircle(7);
		AppShape<Circle> ac = new AppShape<>(circle);
		System.out.println(System.currentTimeMillis() - startTimeMs);
		System.out.println(System.nanoTime() - startTime);

		System.out.println(System.getenv());

		// AppShape.safeResize(circle, 10);
		AppShape.safeResize(resizableCircle, 10);
		// AppShape.safeResize2(circle, 10);
		AppShape.safeResize2(resizableCircle, 10);

		AppShape<?>[] shapes = {
			new AppShape<>(circle),
			new AppShape<>(new Rectangle(3, 4)),
			new AppShape<>(resizableCircle),
			new AppShape<>(new ResizableRectangle(7, 8)),
			new AppShape<>(new Triangle(4, 3))
		};

		for (AppShape<?> shape : shapes) {
			shape.print();
			try {
				shape.resize(10);
			} catch (IllegalStateException e) {
				System.err.println(e.getMessage());
			}
		}
	}
}
