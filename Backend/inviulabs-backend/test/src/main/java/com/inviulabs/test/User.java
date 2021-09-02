package com.inviulabs.test;

import javax.persistence.*;

@Entity
@Table(name = "users")

public class User {
    @ID
    @GeneratedValue(stratergy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "first_name", nullable = false, length = 30)
    private String firstName;
     
    @Column(name = "last_name", nullable = false, length = 30)
    private String lastName;

    @Column(nullable = false, unique = true, length = 50)
    private String email;
     
    @Column(nullable = false, length = 64)
    private String password;

    @Column(nullable = false,  length = 15)
    private String contactNo;
    
    @Column(nullable = false, unique = true, length = 12)
    private String NIC;

    @Column(name = "address", nullable = false, length = 50)
    private String address;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getContactNo() {
        return contactNo;
    }
    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getNICNo() {
        return NIC;
    }
    public void setNICNo(String NIC) {
        this.NIC = NIC;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
}  

