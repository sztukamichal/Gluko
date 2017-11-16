package com.gluko.model;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Date;

@Data
@Entity
public class Account {
    @Id @GeneratedValue
    private Long id;
    private String email;
    private String password;
    private String nick;
    private Integer avatarId;
    private Date createdDate;
    @OneToOne
    private Person person;

    public Account() {
    }

    public Account(String email, String password, String nick, Integer avatarId, Date createdDate, Person person) {
        this.email = email;
        this.password = password;
        this.nick = nick;
        this.avatarId = avatarId;
        this.createdDate = createdDate;
        this.person = person;
    }
}
