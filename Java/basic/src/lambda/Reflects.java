package lambda;

public class Reflects {
	public static void makeNotNullFields(Object obj) {

	}

	public static void main(String[] args) {
		Reflection r = new Reflection();
		System.out.println(r);
		makeNotNullFields(r);
		System.out.println(r);
	}
}
