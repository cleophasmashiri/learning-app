package com.kepler.courseapi;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CourseApiApplicationTokenTestsa {

	//private MockMvc mockMvc;

	@Test
	public void givenNoToken_whenGetSecuredRequest_thenUnAuthorised_401() throws Exception {
		//mockMvc.perform();
	}

}
