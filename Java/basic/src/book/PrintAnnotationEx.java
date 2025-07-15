package book;

import java.lang.reflect.Method;

public class PrintAnnotationEx {
	public static void main(String[] args) throws Exception {

		for (Method m : Service.class.getDeclaredMethods()) {
			if (!m.isAnnotationPresent(PrintAnnotation.class)) {
				continue;
			}

			PrintAnnotation pa = m.getAnnotation(PrintAnnotation.class);
			printline(pa);

			m.invoke(new Service());    // 함수 call -> 찍고 함수 실행
			printline(pa);
		}
	}

	private static void printline(PrintAnnotation pa) {    // static 끼리 method 영역에서 호출하기 위함
		System.out.println(pa.value().repeat(pa.number()));
	}
}
