package lamda;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@AllArgsConstructor
@Getter
public class Employee {
	private String name;
	private float salary;
	private String gender;

	public boolean isFemale() {
		return "F".equals(this.getGender());
	}

	public static void main(String[] args) {
		
	}
}
