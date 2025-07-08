package Library;

public class Book {
	private String title;
	private Author author;
	private double price;
	private int qty;

	public Book(String title, Author author, double price, int qty) {
		this.title = title;
		this.author = author;
		this.price = price;
		this.qty = qty;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "Book[" +
			"title='" + title + '\'' +
			super.toString() +
			", price=" + price +
			", qty=" + qty +
			']';
	}

	public static void main(String[] args) {
		Book[] books = {
			new Book("현의노래", "김훈", 12000, 120),

		}

		while(true)	{

		}
	}
}
