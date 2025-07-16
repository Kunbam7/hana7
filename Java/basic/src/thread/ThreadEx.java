package thread;

public class ThreadEx {
	public static void main(String[] args) {
		//class thread 생성
		Thread t1 = new Thread(new TimerRunnale());
		t1.start();

		Thread t2 = new Thread(new Runnable() {
			@Override
			public void run() {
				for (int i = 0; i < 5; i++) {
					System.out.println(i);
				}
			}
		});

		//현재 방식
		Thread t3 = new Thread(() -> {
			for (int i = 0; i < 5; i++) {
				System.out.println(i);
			}
		});
	}
}
