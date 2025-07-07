import java.util.Scanner;

public class practice {
	// ex2
	static final int MAX_HEIGHT = 165;  // 변수값 고정
	static final int MIN_HEIGHT = 125;

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		// ex1
		//		System.out.print("당신의 이름을 입력하세요 -->>");
		//		String name = scan.next();
		//		System.out.print("당신의 주소를 입력하세요 -->>");
		//		String addr = scan.next();
		//		System.out.print("당신의 나이를 입력하세요 -->>");
		//		int age = scan.nextInt();
		//		System.out.print("당신의 키(cm)를 입력하세요 -->>");
		//		double height = scan.nextDouble();
		//
		//		System.out.printf("이름: %s\n", name);
		//		System.out.println("이름: " + name + "\n주소: " + addr + "\n나이: " + age + "\n키: " + height);

		// ex2
		System.out.print("어린이의 신장(cm)을 입력하세요: ");
		float height = scan.nextFloat();

		System.out.println(height >= MIN_HEIGHT && height < MAX_HEIGHT ? "true" : "false");
		//		System.out.println(height >= 125 && height < 165);  // 사망연산자 없이
	}
}
