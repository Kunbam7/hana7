package oop;

public abstract class Car {
	public Car() {
		System.out.println("Car object생성");
	}

	abstract void run();

	void start() {
		System.out.println("시동을 걸다");
	}
}

class Porche extends Car {

	@Override
	void run() {
		System.out.println("포르셰가 달린다");
	}

}

class CarEx {
	public static void main(String[] args) {
		Car car = new Porche();
		car.start();
		car.run();
	}
}
