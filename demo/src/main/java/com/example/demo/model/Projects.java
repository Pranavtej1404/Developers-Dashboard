package com.example.demo.model;


import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Projects {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int project_id;
    private String name;
    private String description;
    private Date start_date;
    private Date end_date;
    private String status;
    private String priority;
    private Date upadated_at;

}
