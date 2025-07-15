package book;

public class Reflection extends Parent {
	@Min(value = 3, msg = "3글자 이상 입력하세요!")
	@In({"Hong", "Kim", "Lee", "Choi"})
	private String name;
}

class Parent {

}
