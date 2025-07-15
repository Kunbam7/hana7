package book;

public class ValidatorAnnotation {
	public static void validate(Object obj) {
		
	}

	public static void main(String[] args) {
		Reflection r = new Reflection(5, "");
		String[] msgs = Reflections.validator(r);
	}
}
