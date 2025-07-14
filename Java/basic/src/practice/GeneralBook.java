package practice;

public interface GeneralBook {
	int size();

	String names();

	String records();

	boolean nameExist(String name);

	void add(String name);

	void remove(String name);

	String get(String name);

	void sort();

	void print();
}
