package com.otz.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.otz.binding.QuestionRequest;
import com.otz.entity.Question;
import com.otz.repo.QuestionRepository;

@Service
public class QuestionServiceIMPL implements QuestionService {
	@Autowired
	private QuestionRepository queRepo;
	@Override
	public List<Question> showAllQuestion() {
		List<Question> listQue=queRepo.findAll();
		return listQue;
	}

	@Override
	public String saveQuestion(QuestionRequest que) {
		if (que!=null) {
			Question question=new Question();
			BeanUtils.copyProperties(que, question);
			question.setStatus("false");
			question.setCreatedBy("Admin");
			int qid=queRepo.save(question).getQid();
			return "Question saved Successfully , question id is "+qid;
		}
		return "Question Not Saved!";
	}

	@Override
	public String deleteQuestion(Integer qid) {
		Optional<Question> opt=queRepo.findById(qid);
		if(opt.isPresent()) {
			queRepo.deleteById(qid);
			return "Question is deleted!";
		}
		return "Question is not found for deletion!";
	}

	@Override
	public String changeQuestionStatus(Integer qid,String status) {
		Optional<Question> opt=queRepo.findById(qid);
		if(opt.isPresent()) {
			Question que=opt.get();
			que.setStatus(status);
			que.setUpdatedBy("Admin");
			que.setUpdationDate(LocalDate.now());
			queRepo.save(que);
			return "Question status changed!";
		}
		return "Question not found for changing the status!";
	}

	@Override
	public String updateQuestion(QuestionRequest que) {
		Optional<Question> opt=queRepo.findById(que.getQid());
		if (que!=null) {
			Question question=new Question();
			BeanUtils.copyProperties(que, question);
			question.setUpdatedBy("Admin");
			question.setStatus("Active");
			question.setUpdationDate(LocalDate.now());
			int qid=queRepo.save(question).getQid();
			return "Question Updated Successfully , question id is "+qid;
		}
		return "Question Not Updated!";
	}

	@Override
	public Question getQuestionById(Integer qid) {
		Optional<Question> opt=queRepo.findById(qid);
		Question que=null;
		if (opt.isPresent()) {
			que=opt.get();
		}
		return que;
	}

}
