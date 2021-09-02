package com.inviulabs.test;

import static org.assertj.core.api.Assertions.assertThat;
 
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
 
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class TestUserRepository {
     
    @Autowired
    private UserRepository repo;

    @Autowired
    private TestEntityManager entityManager;
     
    @Test
    public void testCreateUser(){
        User user = new User();
    
    user.setFirstName("Premil");
    user.setLastName("Jayasundara");
    user.setEmail("premil610@gmail.com");
    user.setPassword("123");
    user.setContactNo("0772323456");
    user.setNICNo("924869350V")
    user.setAddress("98, Pannipitiya")
     
    User savedUser = repo.save(user);
     
    User existUser = entityManager.find(User.class, savedUser.getId());
     
    assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
     

    }
}