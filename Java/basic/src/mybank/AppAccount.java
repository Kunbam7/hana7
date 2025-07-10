package mybank;

public class AppAccount<T extends Account> {
	private final T account;

	public AppAccount(T account) {
		this.account = account;
	}

	public <T extends Account> boolean isWithdrawable() {
		return this.account instanceof Withdrawable;
	}

	public int depoist(int amt) {
		int benefit = (int)(amt * 0.1);
		return this.account.deposit(amt + benefit);
	}

	public int withdraw(int amt) {
		if (!isWithdrawable()) {
			throw new IllegalArgumentException("Cannot Withdraw: " + getAccountName());
		}

		return ((Withdrawable)this.account).withdraw(amt);
	}

	@Override
	public String toString() {
		return "AppAccount{" +
			this.account.getClass().getName() +
			":: balance=" + account.balance +
			'}';
	}

	private String getAccountName() {
		return this.account.getClass().getSimpleName();
	}
}
