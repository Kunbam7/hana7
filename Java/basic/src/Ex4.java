import java.util.Scanner;

public class Ex4 {
	static final String[] GPA = {"A", "B", "C", "D", "F"};

	public static void scoreToGrade(int score) {
		char grade = switch (score / 10) {
			case 10, 9 -> 'A';
			case 8 -> 'B';
			case 7 -> 'C';
			case 6 -> 'D';
			default -> 'F';
		};
		System.out.println(grade);
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("학점을 입력하세요 -->> ");

		String msg = switch (scanner.next()) {
			case "A", "B" -> "good";
			case "C", "D" -> "So so";
			default -> "See u again";
		};
		System.out.println(msg);
	}
}