import java.util.Scanner;

public class Ex1 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("name= ");
		String name = scanner.next();
		System.out.print("addr= ");
		scanner.nextLine(); // 엔터로 한줄 씹는걸 대신 씹혀줌
		String addr = scanner.nextLine();
		System.out.print("age= ");
		short age = scanner.nextShort();	//  별로 안크니 최소화
		System.out.print("height= ");
		float height = scanner.nextFloat(); //  별로 안크니 최소화

		System.out.printf("""
				- name: %s 
				- addr: %s
				""", name, addr); //print'f', %n = \n, """로 %n 안쓰기
	}
}