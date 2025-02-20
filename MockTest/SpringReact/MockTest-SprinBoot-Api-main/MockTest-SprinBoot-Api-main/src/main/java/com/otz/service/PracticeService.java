package com.otz.service;

import java.util.List;
import java.util.Map;

public interface PracticeService {
	public int evaluateAnswers(Integer userId, List<Map<String, Object>> answers);
	public Map<String, Object> fetchUserPracticeData(Integer userId);
}
