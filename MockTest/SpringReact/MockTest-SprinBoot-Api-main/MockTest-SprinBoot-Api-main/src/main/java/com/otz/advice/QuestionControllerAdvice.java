package com.otz.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class QuestionControllerAdvice {
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> handelAllException(Exception exception){
		return new ResponseEntity<String>(exception.getMessage(),HttpStatus.CREATED);
	}
}
