import java.util.Scanner;

public class Goods {
    String name;
    int price;
    int stock;
    int sold;

    public Goods(String name, int price, int stock, int sold) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.sold = sold;
    }

    public Goods(String... strs) {  // or (String[] strs)
        this(strs[0], Integer.parseInt(strs[1]), Integer.parseInt(strs[2]), Integer.parseInt(strs[3]));
    }

    @Override
    public String toString() {
        return "Goods{" +
                "name='" + name + '\'' +
                ", price=" + price +
                ", stock=" + stock +
                ", sold=" + sold +
                '}';
    }

    public static void main(String[] args) {
        Goods[] goods = new Goods[100];
        int goodsIdx = 0;

        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.print("name price stock sold? ");
            String inputStr = scanner.nextLine();
            if (inputStr.isBlank()) break;

            String[] data = inputStr.split("\\s+"); // \\s스페이스 등 <> S 그 반대  +: 1개 이상
            goods[goodsIdx++] = new Goods(data);
        }

        System.out.println("  상품명	 가격  재고량  판매량");
        for (Goods g : goods) {
            // System.out.println(g);
            if (g == null) break;
            System.out.printf("%7s %,6d  %3d  %3d%n", g.name, g.price, g.stock, g.sold);
        }
    }
}