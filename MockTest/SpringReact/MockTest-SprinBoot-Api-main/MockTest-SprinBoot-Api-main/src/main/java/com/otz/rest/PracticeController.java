package com.otz.rest;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.otz.service.PracticeService;

@RestController
@RequestMapping("/practice")
public class PracticeController {
	@Autowired
    private PracticeService practiceService;
	
	 @PostMapping("/test")
	    public ResponseEntity<String> evaluateAnswers(@RequestBody Map<String, Object> data) {
	        Integer userId = (Integer) data.get("userId");
	        List<Map<String, Object>> answers = (List<Map<String, Object>>) data.get("answers");
	        int totalMarks = practiceService.evaluateAnswers(userId, answers);
	        return ResponseEntity.ok("Total marks scored: " + totalMarks);
	    }
	 @GetMapping("/user/{userId}")
	    public ResponseEntity<Map<String, Object>> getUserPracticeData(@PathVariable Integer userId) {
	        Map<String, Object> data = practiceService.fetchUserPracticeData(userId);
	        return ResponseEntity.ok(data);
	    }
}
