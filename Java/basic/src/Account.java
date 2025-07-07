import java.util.Scanner;

public class Account {
    int accountNo;
    String name;
    double balance;

    public Account(int accountNo, String name, double balance) {
        this.insert(accountNo, name, balance);
    }

    // 생성자 함수와 합칠것은 합치기 -> 코드 중복 방지
    // 이름을 분명히 해야함. amount = amnt
    void insert(int accountNo, String name, double amount) {
        this.accountNo = accountNo;
        this.name = name;
        this.balance = amount;
    }

    void withddraw(double amnt) {
        if (amnt > this.balance) {
            System.out.println("잔액이 부족하여 출력할 수 없음!");
            return;
        }

        this.action(-amnt);
    }

    void deposit(double amnt) {
        this.action(amnt);
    }

    private void action(double amnt) {
        this.balance += amnt;
        this.checkBalance();
    }

    private void checkBalance() {
        System.out.printf("%s님의 잔액은 %9.1f원 입니다.%n", this.name, this.balance);
    }

    void displsy() {
        System.out.println("-----------------------");
        System.out.printf("계좌번호: %d%n예금주: %s%n잔액: %.1f원%n", accountNo, name, balance);
        System.out.println("-----------------------");
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountNo='" + accountNo +
                ", name=" + name + '\'' +
                ", balance=" + balance +
                '}';
    }

    public static void main(String[] args) {
        Account account = new Account(1111, "코난", 10000);
        Scanner sccaner = new Scanner(System.in);

        while (true) {
            System.out.println("+: 입금, -: 출금, Q/Enter: 종료> ");
            String action = sccaner.next();

            if (action.isBlank() || "Q".equalsIgnoreCase(action)) {
                System.out.println("작업이 완료되었습니다.");
                account.displsy();
                break;
            }

            boolean isDeposit = "+".equals(action);
            String actionText = isDeposit ? "입금" : "출금";
            System.out.printf("얼마를 %s 하시겠습니까?", actionText);
            double amnt = sccaner.nextDouble();

            if (isDeposit) {
                account.deposit(amnt);
            } else {
                account.withddraw(amnt);
            }
        }
    }
}