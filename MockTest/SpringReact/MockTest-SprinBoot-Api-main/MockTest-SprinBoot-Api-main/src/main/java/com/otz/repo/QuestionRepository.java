package com.otz.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.otz.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
	 Optional<Question> findById(Integer id);
}
