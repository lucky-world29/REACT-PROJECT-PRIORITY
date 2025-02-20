package com.otz.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.otz.binding.QuestionRequest;
import com.otz.entity.Question;
import com.otz.service.QuestionService;


@RestController
@RequestMapping("/ques")
public class QuestionController {
	@Autowired
	private QuestionService service;
	
	@GetMapping("/all-que")
	public ResponseEntity<List<Question>> showQuestions(){
		List<Question> listQue=service.showAllQuestion();
		return new ResponseEntity<List<Question>>(listQue,HttpStatus.OK);
	}
	@PostMapping("/change-status/{status}/{qid}")
	public ResponseEntity<String> generateCaseNo(@PathVariable Integer qid,@PathVariable String status){
		String msg=service.changeQuestionStatus(qid,status);
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	@GetMapping("/getquebyid/{qid}")
	public ResponseEntity<Question> getQuestionById(@PathVariable Integer qid){
		Question question=service.getQuestionById(qid);
		return new ResponseEntity<Question>(question,HttpStatus.OK);
	}
	@GetMapping("/delete/{qid}")
	public ResponseEntity<String> deleteQuestionById(@PathVariable Integer qid){
		String msg=service.deleteQuestion(qid);
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	@PostMapping("/save-que")
	public ResponseEntity<String> saveQuestion(@RequestBody QuestionRequest inputs){
		String msg=service.saveQuestion(inputs);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@PutMapping("/update-que")
	public ResponseEntity<String> updateQuestion(@RequestBody QuestionRequest inputs){
		String msg=service.updateQuestion(inputs);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
}
