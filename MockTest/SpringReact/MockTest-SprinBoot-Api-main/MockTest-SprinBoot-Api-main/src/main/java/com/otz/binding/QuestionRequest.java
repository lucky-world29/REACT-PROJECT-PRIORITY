package com.otz.binding;

import lombok.Data;

@Data
public class QuestionRequest {
	private Integer qid;
    private String question;
    private String opt1;
    private String opt2;
    private String opt3;
    private String opt4; 
    private String opt5;
    private String ans;
    private String description;
    private int points;

}
