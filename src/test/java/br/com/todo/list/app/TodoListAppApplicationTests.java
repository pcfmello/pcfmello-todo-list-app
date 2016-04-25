package br.com.todo.list.app;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = TodoListAppApplication.class)
@WebAppConfiguration
public class TodoListAppApplicationTests {

	@Test
	public void contextLoads() {
	}

}
