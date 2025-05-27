package shop.ingong.demo;

import java.util.ArrayList;

import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpServletRequest;
import shop.ingong.dto.Store;


@Controller
public class MyController {
	
	@GetMapping("/hello") 
	public String hello() {
		return "Hello, Spring Boot World!";
	}
	
    @GetMapping("/welcome")
    public String welcome(Model model) {
    	String a = "홍길동";
    	String[] b = {"전우치","이순신"};
    	ArrayList<Store> c = new ArrayList();
    	c.add(new Store("1", "1"));
    	c.add(new Store("2", "2"));
    	

    	model.addAttribute("a", a);
    	model.addAttribute("b", b);
    	model.addAttribute("c", c);
    	
        return "welcome";
    }
    
    @GetMapping("/param")
    public String param(@RequestParam String menu,Store st,HttpServletRequest req, Model model) {
    	System.out.println("menu:"+menu);
    	System.out.println("st:"+st);
    	System.out.println("req:"+req.getParameter("menu"));
    	
        return "param";
    }
    
    @PostMapping("/post")
    public String post(@RequestParam String menu,Store st,HttpServletRequest req,Model model) {
    	System.out.println("menu:"+menu);
    	System.out.println("st:"+st);
    	System.out.println("req:"+req.getParameter("menu"));
    	
        return "post";
    }
}
