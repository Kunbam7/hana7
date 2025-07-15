package lambda;

import java.lang.reflect.Field;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper = true)
public class Reflects extends Parent {
	private String name;
	private Integer deptId;

	public static void makeNotNullFields(Object obj) {
		for (Field f : obj.getClass().getDeclaredFields()) {
			try {
				f.setAccessible(true);
				if (f.get(obj) != null)
					continue;
				// if(f.getType().equals(String.class))
				// if (f.getType() == String.class)    // 가능한 이유: 참조값이 같음(같은 메모리 주소)
				// 	f.set(obj, "");

				switch (f.getType().getSimpleName()) {
					//switch는 case 안의 것이 같은 주수인지, 다른 주소인지 알 수 없어,==불가 -> 벹어냄
					// case Integer.class -> f.set(obj, 0);

					case "String" -> f.set(obj, "");
					case "Boolean" -> f.set(obj, false);
					case "Long" -> f.set(obj, 0L);
					case "Double" -> f.set(obj, 0.0);
					default -> f.set(obj, 0);
				}
			} catch (IllegalAccessException e) {
				e.printStackTrace(System.out);
			}
		}
	}

	public static void main(String[] args) {
		Reflection r = new Reflection();
		System.out.println(r);
		makeNotNullFields(r);
		System.out.println(r);
	}
}
