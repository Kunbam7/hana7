package thread;

public class Vote implements Runnable {

	// 람다식으로 간단히 표현 가능 + 함수 이름 지정해서 호출 할 수 있게해야함
	@Override
	public void run() {
		String name = Thread.currentThread().getName(); // -> 요건 굿?
		// 굳이 없어도 되는 변수 -> souf에 박아넣음 됨
		String bar = "*";
		int rate = 0;
		// 굳이 for를 빠로 만들필요없이, while 구문으로 rate 하나로 루프 굴리는 방식으로, rate 100 초과를 신경쓰지 않는 방향으로
		for (int i = 0; i < 100; i++) {
			// Math.random 저건 0 ~ 0.9 사이값 출력하는걸 기억해둘것
			int instanceRate = (int)(Math.random() * 5) + 1;
			rate += instanceRate;

			// 다른방법 생각할거 없이 .repeat()으로 계속 커지게 만듦됬었음
			// 숫자 뒤 % 붙이려면 %%으로 해야함
			System.out.printf("%s 개표율: %d%%(개표증가율 : %d%%)%s%n", name, rate, instanceRate, bar.repeat(rate));

			try {
				// 한번 쓸놈인데, 굳이 변수만들필요 없었음
				int millis = (int)(Math.random() * 1000);
				Thread.sleep(millis);
			}
			// 걍 리턴으로 종료시키는게 나음
			catch (InterruptedException e) {
				throw new RuntimeException(e);
			}
			// 왜 여따 넣었드라...?
			if (rate >= 100) {

			}
		}
	}

	public static void main(String[] args) {
		// Vote가 아닌, Thread 넣어야함 -> 근데 이거 차이 뭐드라ㅅㅂ;
		Thread area1 = new Thread("제1지역구");
		Vote area2 = new Vote();
		Vote area3 = new Vote();

	}
}
