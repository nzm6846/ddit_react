
public class Human extends Animal {
	String job = "student";
	
	public void chibbo(String job) {
		this.job = job;
	}
	
	public static void main(String[] args) {
		Human hum = new Human();
		System.out.println(hum.x);
		System.out.println(hum.y);
		System.out.println(hum.job);
		hum.move(100, 50);
		hum.chibbo("programmer");
		System.out.println(hum.x);
		System.out.println(hum.y);
		System.out.println(hum.job);
		
	}
}
