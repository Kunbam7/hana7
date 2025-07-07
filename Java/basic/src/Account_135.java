public class Account_135 {
	String id;
	String name;
	int balance = 0;

	public Account_135(String id, String name, int balance) {
		this.id = id;
		this.name = name;
		this.balance = balance;
	}

	int desposit(int amount) {

		return balance;
	}

	int withdraw(int amount) {
		return balance;
	}

	int transferTo(Account_135 another, int amount) {

		return balance;
	}

	int transferGet(Account_135 owner, int amount) {
		//        this.backAction(amount);
		return balance;
	}

	private void announceAction(int amount) {
		this.balance += amount;
		this.checkBalance();
	}

	private void backAction(int amount) {
		this.balance += amount;
	}

	private void checkBalance() {
		System.out.printf("%s님의 잔액은 %9.1f원 입니다.%n", this.name, this.balance);
	}
}
