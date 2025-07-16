package thread;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class TimerThread extends Thread {
	public TimerThread(String name) {
		super(name);
	}

	@Override
	public void run() {
		String name = Thread.currentThread().getName();
		System.out.println("TimerThread started!" + name);
		for (int i = 0; i < 5; i++) {
			System.out.println(name + " : " + i);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// throw new RuntimeException(e);	// throw?
				System.out.println(name + "thread's interrupted!");
			}
		}
	}

	public static void main(String[] args) {
		System.out.println("Thread.currentThread().getName() = " + Thread.currentThread().getName());
		System.out.println("Thread.currentThread() = " + Thread.currentThread());

		// OS, JVM의 움직임에 따라 실행, 서순 x, 일전한 순서 x
		TimerThread timer1 = new TimerThread("Timer1");
		TimerThread timer2 = new TimerThread("Timer2");
		timer1.setPriority(Thread.MIN_PRIORITY);
		timer2.setPriority(Thread.MIN_PRIORITY);
		timer1.start();
		timer2.start();

		// timer1 모두 끝내고 timer2 실행 -> 우선순위 분명, thread 의미가 낮음
		// timer1.run();
		// timer2.run();

		for (int i = 0; i < 5; i++) {
			try {
				Thread.sleep(1000);
				if (i == 1)
					timer2.interrupt();
			} catch (InterruptedException e) {
				throw new RuntimeException(e);
			}
			System.out.println(i + "번 main thread");
		}
	}
}
