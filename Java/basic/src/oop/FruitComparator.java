package oop;

import java.util.Comparator;

public class FruitComparator implements Comparator<Fruit> {
	@Override
	public int compare(Fruit fruit1, Fruit fruit2) {
		return fruit1.getName().compareTo(fruit2.getName());
	}

	public static void main(String[] args) {
		Comparator<? super Fruit> fc = new FruitComparator();

		Fruit banana = new Fruit("Banana");
		Apple redApple = new Apple("RedApple");
		Orange orange = new Orange("Orange");
		System.out.println(banana instanceof Fruit);
		System.out.println(redApple instanceof Fruit);

		int result1 = fc.compare(banana, redApple);    // 앞글자 아스키코드 값을 비교, 그 값을 +-한 값 출력
		int result2 = fc.compare(redApple, banana);    // -면 뒤가, +면 앞이 더 큰것(알파벳 순)
		System.out.println("Result1: " + result1);
		System.out.println("Result2: " + result2);
	}
}
