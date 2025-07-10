package oop;

public class Gen {
	// static <T extends Number> T powx(T t) {        //object로 먼저캐스팅
	// 	return t * t;
	// }

	// 해결법 2: 가장 큰 사이즈의 넘버로 만들기
	static <T extends Number> T powd(T t) {
		double squared = t.doubleValue() * t.doubleValue();

		if (t instanceof Integer) {
			return (T)Integer.valueOf((int)squared);
		}
		if (t instanceof Long) {
			return (T)Long.valueOf((long)squared);
		}
		if (t instanceof Double) {
			return (T)Double.valueOf(squared);
		}
		if (t instanceof Float) {
			return (T)Float.valueOf((float)squared);
		}

		return (T)Double.valueOf(squared);
	}

	static Integer pow(Integer i) {
		return i * i;
	}

	public static void main(String[] args) {
		// System.out.println(powx(5));
		System.out.println(pow(15));
	}
}
