package com.otz.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.otz.binding.UserPracticeResponse;
import com.otz.entity.Practice;
import com.otz.entity.Question;
import com.otz.repo.PracticeRepository;
import com.otz.repo.QuestionRepository;
@Service
public class PracticeServiceIMPL implements PracticeService {
	@Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private PracticeRepository practiceRepository;
    
	@Override
	public int evaluateAnswers(Integer userId, List<Map<String, Object>> answers) {
		int totalMarks = 0;

        for (Map<String, Object> answer : answers) {
            Integer qid = (Integer) answer.get("questionId");
            String userAnswer = answer.get("userAnswer").toString();
            Question question = questionRepository.findById(qid).get();
            boolean isCorrect = userAnswer.equals(question.getAns());
            int marks = isCorrect ? question.getPoints() : 0;
            // Save the response in the practice table
            Practice practice = new Practice();
            practice.setUserId(userId);;
            practice.setQid(qid);
            practice.setUserAnswer(userAnswer);
            practice.setIsCorrect(isCorrect);
            practice.setMarks(marks);
            practiceRepository.save(practice);
            totalMarks += marks;
        }

        return totalMarks;
	}
	 public Map<String, Object> fetchUserPracticeData(Integer userId) {
	        List<Practice> practiceList = practiceRepository.findByUserId(userId);

	        List<UserPracticeResponse> listresponses = new ArrayList<>();
	        int totalMarks = 0;

	        for (Practice practice : practiceList) {
	            Question question = questionRepository.findById(practice.getQid()).get();
	            UserPracticeResponse response = new UserPracticeResponse();
	            response.setQid(practice.getQid());
	            response.setQuestion(question.getQuestion());
	            response.setUserAnswer(practice.getUserAnswer());
	            response.setCorrectAnswer(question.getAns());
	            response.setDescription(question.getDescription());
	            response.setIsCorrect(practice.getIsCorrect());
	            response.setMarks(practice.getMarks());
	            totalMarks += practice.getMarks();
	            listresponses.add(response);
	        }
	        Map<String, Object> result = new HashMap<>();
	        result.put("userId", userId);
	        result.put("totalMarks", totalMarks);
	        result.put("practiceDetails", listresponses);

	        return result;
	    }
}
