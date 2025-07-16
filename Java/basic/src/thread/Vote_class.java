package thread;

public class Vote_class {
	public static void main(String[] args) {
		Runnable voteCounter = () -> {
			int percent = 0;
			String name = Thread.currentThread().getName();

			while (percent < 100) {
				int rate = (int)(Math.random() * 5) + 1;

				if (percent > 100) {
					rate = 100 - percent;
					percent = 100;
				}
				percent += rate;

				System.out.printf("%5s 개표울: %d%% (개표증가율 : %d%%) %s%n", name, percent, rate, "*".repeat(percent));

				try {
					Thread.sleep((long)(1000 * Math.random()));
				} catch (InterruptedException e) {
					System.out.println("Interrupted!");
					return;
				}
			}
		};

		Thread t1 = new Thread("제1 지역구");
		Thread t2 = new Thread("제2 지역구");
		Thread t3 = new Thread("제3 지역구");
		t1.start();
		t2.start();
		t3.start();
	}
}
