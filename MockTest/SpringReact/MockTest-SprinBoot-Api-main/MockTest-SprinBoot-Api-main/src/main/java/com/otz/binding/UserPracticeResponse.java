package com.otz.binding;

import lombok.Data;

@Data
public class UserPracticeResponse {
	   private Integer qid;
	    private String question;
	    private String userAnswer;
	    private String correctAnswer;
	    private Boolean isCorrect;
	    private Integer marks;
	    private String description;
}
