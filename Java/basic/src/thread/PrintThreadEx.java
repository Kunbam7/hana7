package thread;

import lombok.AllArgsConstructor;

class PrintTable {
	// 1. pt shared, pt에서 쓰는 printTable을 싱크로
	public synchronized void printTable(int n) {
		System.out.println(n + "단 출력");
		for (int i = 0; i < 10; i++) {
			System.out.printf("%d * %d = %d%n", n, i, n * i);
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				return;
			}
		}
	}
}

@AllArgsConstructor
class PrintThread extends Thread {
	private PrintTable pt;
	private int n;

	public void run() {
		pt.printTable(n);
	}
}

public class PrintThreadEx {
	public static void main(String[] args) {
		// 2. 각기 주기(스프링서 좋아하는거?)
		PrintTable pt1 = new PrintTable();
		PrintTable pt2 = new PrintTable();
		PrintThread t1 = new PrintThread(pt1, 2);
		PrintThread t2 = new PrintThread(pt2, 5);
		t1.start();
		t2.start();
	}
}
