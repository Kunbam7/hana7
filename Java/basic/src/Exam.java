import java.util.Scanner;

public class Exam {
	public static void main(String[] args) {
		System.out.println("args=" + args.length);
		int midScore = 50;
		int finalScore;
		finalScore = 80;
		System.out.println("midScore=" + midScore);
		System.out.printf("finalScore=%d%n", finalScore);

		System.out.printf("mid: %d + final: %d = %d", midScore, finalScore, midScore + finalScore);
	}

	public static class Goods {
		String name;
		int price;
		int stock;
		int sold;

		public Goods(String name, int price, int stock, int sold) {
			this.name = name;
			this.price = price;
			this.stock = stock;
			this.sold = sold;
		}

		public Goods(String... strs) {  // or (String[] strs)
			this(strs[0], Integer.parseInt(strs[1]), Integer.parseInt(strs[2]), Integer.parseInt(strs[3]));
		}

		@Override
		public String toString() {
			return "Exam.Goods{" +
				"name='" + name + '\'' +
				", price=" + price +
				", stock=" + stock +
				", sold=" + sold +
				'}';
		}

		public static void main(String[] args) {
			Goods[] goods = new Goods[100];
			int goodsIdx = 0;

			Scanner scanner = new Scanner(System.in);
			while (true) {
				System.out.print("name price stock sold? ");
				String inputStr = scanner.nextLine();
				if (inputStr.isBlank())
					break;

				String[] data = inputStr.split("\\s+"); // \\s스페이스 등 <> S 그 반대  +: 1개 이상
				goods[goodsIdx++] = new Goods(data);
			}

			System.out.println("  상품명	 가격  재고량  판매량");
			for (Goods g : goods) {
				// System.out.println(g);
				if (g == null)
					break;
				System.out.printf("%7s %,6d  %,3d  %3d%n", g.name, g.price, g.stock, g.sold);
				// int에 %,d, or 변수 * 10_000하면 천단위로 ,찍어짐
			}
		}

	}

	//TIP 코드를 <b>실행</b>하려면 <shortcut actionId="Run"/>을(를) 누르거나
	// 에디터 여백에 있는 <icon src="AllIcons.Actions.Execute"/> 아이콘을 클릭하세요.
	public static class Main { //  js function decl같이 function 위치
		public static void main(
			String[] args) {    // static: 장적, method영역, 메모리영역에 잡히면 변화없이 유지 -> 고정시켜야할 데이터, js에서 가 여기선 thread
			//TIP 캐럿을 강조 표시된 텍스트에 놓고 <shortcut actionId="ShowIntentionActions"/>을(를) 누르면
			// IntelliJ IDEA이(가) 수정을 제안하는 것을 확인할 수 있습니다.
			System.out.printf("Hello and welcome!");

			for (int i = 1; i <= 5; i++) {
				//TIP <shortcut actionId="Debug"/>을(를) 눌러 코드 디버그를 시작하세요. 1개의 <icon src="AllIcons.Debugger.Db_set_breakpoint"/> 중단점을 설정해 드렸습니다
				// 언제든 <shortcut actionId="ToggleLineBreakpoint"/>을(를) 눌러 중단점을 더 추가할 수 있습니다.
				System.out.println("i = " + i);
			}
		}
	}
}
