package oop;

public interface Drawable {
	public void draw();    //public 생략가능
}

class Rectangle implements Drawable {
	@Override
	public void draw() {
		System.out.println("Draw Rectangle");
	}
}

class Triangle implements Drawable {
	@Override
	public void draw() {
		System.out.println("Draw Triangle");
	}
}

class DrawEx {
	static void drawAnything(Drawable shape) {
		shape.draw();
	}

	public static void main(String[] args) {
		Drawable d = new Rectangle();
		d.draw();

		Drawable[] shapes = {new Triangle(), new Triangle()};
		for (Drawable shape : shapes) {
			drawAnything(shape);
		}
	}
}
