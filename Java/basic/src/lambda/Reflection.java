package lambda;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Reflection extends Parent {
	private String name;
	private Integer deptId;
	private Double addr;
	private Boolean isGuest;
	
	public Reflection(int id, String name) {
		super(id);
		this.name = name;
	}

	public static void main(String[] args) {
		Reflection r = new Reflection();
		System.out.println("r-before = " + r);
		Reflects.makeNotNullFields(r);
		System.out.println("r-after = " + r);
	}
}

@AllArgsConstructor
@NoArgsConstructor
@ToString
class Parent {
	private int id;
}
