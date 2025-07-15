package book;

public class Service {
	@PrintAnnotation
	public void method1() {
		System.out.println("method1");
	}

	@PrintAnnotation("*")    // value = 생략됨
	public void method2() {
		System.out.println("method2");
	}

	@PrintAnnotation(value = "&", number = 30)    // 2 이상인 걍우에는 모두 명시 필요
	public void method3() {
		System.out.println("method3");
	}
}
