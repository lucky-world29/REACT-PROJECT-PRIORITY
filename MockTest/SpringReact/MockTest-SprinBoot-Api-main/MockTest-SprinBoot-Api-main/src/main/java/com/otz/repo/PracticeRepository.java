package com.otz.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.otz.entity.Practice;

public interface PracticeRepository extends JpaRepository<Practice, Integer> {
	List<Practice> findByUserId(Integer userId);
}
