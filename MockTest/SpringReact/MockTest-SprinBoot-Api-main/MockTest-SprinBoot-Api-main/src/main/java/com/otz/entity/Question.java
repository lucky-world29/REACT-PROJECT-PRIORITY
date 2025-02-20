package com.otz.entity;

import java.time.LocalDate;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "question")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Question {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer qid;
	@Column(length=500)
    private String question;
    
	@Column(length=200)
    private String opt1;

	@Column(length=200)
    private String opt2;
    
	@Column(length=200)
    private String opt3;

	@Column(length=200)
    private String opt4; 
    
	@Column(length=200)
    private String opt5;

    
	@Column(length=500)
    private String ans;

	@Column(length=1000)
    private String description;
	
	@Column(length=20)
    private String status;
	
    private int points;
    @Column(length =30)
	private	String createdBy;
	@Column(length =30)
	private	String updatedBy;
	@CreationTimestamp
	@Column(updatable = false)
	private	LocalDate creationDate;
	@UpdateTimestamp
	@Column(insertable = false)
	private	LocalDate updationDate;
}
