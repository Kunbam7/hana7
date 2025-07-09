package oop;

abstract class Animal {
	String name;

	abstract void makeSound();
}

class Mouse extends Animal {
	@Override
	void makeSound() {
		System.out.println("찍찍");
	}
}

class Dog extends Animal {
	@Override
	void makeSound() {
		System.out.println("멍멍");
	}
}

class Cat extends Animal {
	@Override
	void makeSound() {
		System.out.println("야옹");
	}
}

public class AnimalEx {
	public static void main(String[] args) {
		Animal[] animals = {new Cat(), new Dog(), new Mouse()};
		for (Animal animal : animals) {
			animal.makeSound();
		}
	}
}
