package thread;

public class Vote implements Runnable {
	int rate = 0;

	@Override
	public void run() {
		String name = Thread.currentThread().getName();
		String bar = "*";
		for (int i = 0; i < 100; i++) {
			int instanceRate = (int)(Math.random() * 5) + 1;
			rate += instanceRate;

			System.out.printf("제%s 개표율: %d%(개표증가율 : %d%)%s%n", name, rate, instanceRate, bar);

			try {
				int millis = 100; // (int)(Math.random() * 100) + 1;
				Thread.sleep(millis);
			} catch (InterruptedException e) {
				throw new RuntimeException(e);
			}

			if (rate >= 100) {

			}
		}
	}

	public static void main(String[] args) {
		Vote area1 = new Vote();
		Vote area2 = new Vote();
		Vote area3 = new Vote();
	}
}
