package oop;

public interface Alarm {
	void playMusic(String title);

	abstract public void beep();

	default void setTime(String time) {
		System.out.println("Set time to " + time);
	}

	public static void main(String[] args) {
		Alarm a = new Smartphone();
		a.playMusic("비의 램소디");
		a.beep();
		a.setTime("12:00");
	}
}

class Smartphone implements Alarm {
	private String phoneNumber;

	void call() {
		System.out.println("Call to" + this.phoneNumber);
	}

	@Override
	public void playMusic(String title) {
		System.out.printf("[%s] 재생", title);
	}

	@Override
	public void beep() {
		for (int i = 0; i < 3; i++) {
			System.out.print("삐이익 ~ \007");
			System.out.flush();
			// Toolkit.getDefaultToolkit().beep();
		}
	}
}
