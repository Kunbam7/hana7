package thread;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class DaemonThread extends Thread {
	public DaemonThread(String name) {
		super(name);
	}

	@Override
	public void run() {
		String name = Thread.currentThread().getName();
		System.out.println("DaemonThread started!");

		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}
		System.out.println("DaemonThread ended!");
	}

	public static void main(String[] args) {
		System.out.println("Thread.currentThread().getName() = " + Thread.currentThread().getName());
		System.out.println("Thread.currentThread() = " + Thread.currentThread());

		DaemonThread dt = new DaemonThread();
		// dt.setDaemon(true);    // 처리 여부와 별개로 main 끝나면 바로 죽이기
		dt.start();

		System.out.println("Main thread ended!");
	}
}
