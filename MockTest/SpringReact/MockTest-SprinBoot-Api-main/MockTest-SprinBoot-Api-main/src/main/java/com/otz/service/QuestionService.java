package com.otz.service;
import java.util.List;
import com.otz.binding.QuestionRequest;
import com.otz.entity.Question;

public interface QuestionService {
	public List<Question> showAllQuestion();
	public String   saveQuestion(QuestionRequest que);
	public String   updateQuestion (QuestionRequest que);
	public String   deleteQuestion (Integer qid );
	public String   changeQuestionStatus (Integer qid,String status);
	public Question getQuestionById(Integer qid);
}
