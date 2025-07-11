package collection;

import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

import oop.Circle;

public class Sets {
	public static void main(String[] args) {
		Set<Integer> set1 = new HashSet<>();

		Set<Integer> set2 = new TreeSet<>();

		Set<Circle> circles = new TreeSet<>();
		circles.add(new Circle(25));
		circles.add(new Circle(15));
		circles.add(new Circle(5));
		circles.add(new Circle(50));
		System.out.println("circles: " + circles);
	}
}
