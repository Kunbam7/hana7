//class Goods1 {
//    String name;
//    int price;
//    int remain;
//    int stock;
//}

class Account1 {
    int accountNo;
    String name;
    double balance;

    public void insert(int a, String n, double amnt) {
        accountNo = a;
        name = n;
        balance = amnt;
    }

    public void deposit(double amnt) {
        if (balance - amnt < 0) {
            System.out.println("잔액이 부족하여 출력할 수 없음!");
            System.out.printf("%s님의 잔액은 %.1f원 입니다.%n", name, balance);
        } else {
            System.out.printf("%s님의 잔액은 %.1f원 입니다.%n", name, balance - amnt);
        }
    }

    public void withddraw(double amnt) {
        System.out.printf("%s님의 잔액은 %.1f원 입니다.%n", name, balance + amnt);
    }

    public void displsy() {
        System.out.println("-----------------------");
        System.out.printf("계좌번호: %d%n예금주: %s%n잔액: %.1f원%n", accountNo, name, balance);
        System.out.println("-----------------------");
    }
}

public class Ex6 {
    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);
//        Goods1 cola = new Goods1();

        Account1 conan = new Account1();
        conan.insert(1111, "코난", 10000);
        conan.displsy();
        conan.deposit(20000);
        conan.withddraw(30000);
        conan.deposit(1500);
    }
}