package oop;

public class Fruit {
	private String name;

	public Fruit(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
}

class Apple extends Fruit {
	public Apple(String name) {
		super(name);
	}
}

class Orange extends Fruit {
	public Orange(String name) {
		super(name);
	}
}
