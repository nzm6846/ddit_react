
public class MyFun {
	
	public static void main(String[] args) {
		int sum = add(4, 2);
		int min = minus(4, 2);
		System.out.println("sum:"+sum);
		System.out.println("min:"+min);
	}

	public static int add(int a,int b) {
		return a+b;
	}
	public static int minus(int a,int b) {
		return a-b;
	}

}
